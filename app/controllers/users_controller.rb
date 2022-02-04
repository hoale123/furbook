class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  # GET /users
  def index
    users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    render json: @current_user, status: :accepted
  end

  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # PATCH/PUT /users/1
  def update
    @current_user.update!(user_params)
    render json: @current_user, status: :accepted
  end

  # DELETE /users/1
  def destroy
    @current_user.destroy
  end

  private
    def user_params
      params.permit(:username, :password_digest, :profile_picture, :bio)
    end
end
