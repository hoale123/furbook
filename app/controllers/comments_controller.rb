class CommentsController < ApplicationController
  skip_before_action :authorize, only: [:create, :index, :show]
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  def index
    comments = Comment.all

    render json: comments, status: :ok
  end

  # GET /comments/1
  def show
    comment = Comment.find_by(id: params[:id])
    render json: comment, status: :ok
  end

  # def create
  #   comment = Comment.create!(comment_params)
  #   render json: comment, status: :created
  # end
  def create
    @comment = Comment.create!(comment_params)
      render json: @comment, status: :created, location: @comment
      rescue ActiveRecord::RecordInvalid => invalid
      render json: { errors: invalid.record.errors.full_messages }
  end



  # PATCH/PUT /comments/1
  def update
    comment = Comment.find(params[:id])
    comment.update!(comment_params)
    render json: comment, status: :accepted
  end

  # DELETE /comments/1
  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    head :no_content, status: :deleted
end

  private
    # # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = @current_user.comments.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:body, :user_id, :post_id,:username)
    end
end
