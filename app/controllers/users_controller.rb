class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :index]

  def index
      users = User.all
      render json: users
  end
  
  def show
      render json: @current_user
  end

  def create #signup
      # chanign the parameters to a hash, so I can change them
      # Remove :profile_picture if it's empty
      parameters = user_params.to_h
      if parameters[:profile_picture].blank? then 
          parameters.delete(:profile_picture)
      end

      user = User.create!(parameters)
      session[:user_id] = user.id
      render json: user, status: :created 
  end 

def update
    user = User.find(user_params[:id])
    user.update!(user_params)
    render json: user, status: :accepted
end
    

  private
  # Only allow a list of trusted parameters through.
  def user_params
      params.permit(:username, :password, :profile_picture, :bio, :birthdate, :phone_number, :email, :id, :user)
  end 

  # Use callbacks to share common setup or constraints between actions.
  def set_post
    @user = User.find(params[:id])
  end
end
