require 'byebug'

class Api::SessionsController < ApplicationController
	def create
		@user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
			login(@user)
      @newsfeed_posts = []
      @timeline_posts = []
      @user = User.includes(:friends).where(id: @user.id).first
			render "api/users/show"
		else
			render(
        json: ["Invalid email/password combination"],
        status: 401
      )
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
      @newsfeed_posts = []
			render "api/users/show"
		else
			render(
        json: ["Nobody signed in"],
        status: 404
      )
		end
	end
end
