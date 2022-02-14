class FriendsController < ApplicationController
  skip_before_action :authorize, only: [:index,:show]
  wrap_parameters format: []
  # GET /friends
  def index
    @friends = Friend.all

    render json: @friends
  end

  # GET /friends/1
  def show
    friend = Friend.find_by(id: params[:id])
    render json: friend, status: :ok
  end

  # POST /friends
  def create
    friend = @current_user.friends.find_or_create_by!(friend_params)
    render json: @current_user, status: :created
  end

  # PATCH/PUT /friends/1
  def update
    friend = Friend.find(params[:id])
    friend.update!(friend_params)
    render json: @current_user, status: :accepted
  end

  # DELETE /friends/1
  def destroy
    friend = Friend.find(params[:id])
    friend.destroy
    head :no_content, status: :deleted
  end

  private
    # Only allow a list of trusted parameters through.
    def friend_params
      params.permit(:user_id, :username, :bio, :profile_picture, :birthdate, :phone_number, :email, :id)
    end
end
