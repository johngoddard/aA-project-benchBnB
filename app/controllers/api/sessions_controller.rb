class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(session_params)
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"], status: 422
    end
  end

  def destroy
    puts {current_user}
    unless current_user
      render json: ["No user is signed in"], status: 404
    else
      @user = current_user
      logout!
      render "api/users/show"
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password)
  end
end
