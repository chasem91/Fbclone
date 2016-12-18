class Api::SessionsController < ApplicationController
	def create
		@user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
			login(@user)
			@user = User.include_everything.find(@user.id)
			friend_ids = @user.friends.map { |friend| friend.id }
      friend_ids << @user.id
			@newsfeed_posts = Post.include_everything.where(author_id: friend_ids).reverse
			@timeline_posts = Post.include_everything.where(user_id: @user.id).reverse
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
			@timeline_posts = []
			render "api/users/show"
		else
			render(
        json: ["Nobody signed in"],
        status: 404
      )
		end
	end
end
