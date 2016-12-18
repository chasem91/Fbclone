class Api::SessionsController < ApplicationController
	def create
		@user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
			login(@user)

			@user = User.includes(
				:friends,
				{ friend_requests: [:user, :friend] },
				{ requested_friends: [:user, :friend] },
	      { conversations: [ { messages: [ { user: [ :profile_picture ] }  ] }, { users: [ :profile_picture ] } ] },
				:profile_picture,
				:banner_picture
			).find(@user.id)

			friend_ids = @user.friends.map { |friend| friend.id }
      friend_ids << @user.id

			@newsfeed_posts = Post
			.includes({ author: [ :profile_picture ] }, :user, { comments: [ { likes: [:liker] }, { author: [ :profile_picture ] } ] }, { likes: [:liker] } )
			.where(author_id: friend_ids).reverse

			@timeline_posts = Post
	    .includes({ author: [ :profile_picture ] }, :user, { comments: [ { likes: [:liker] }, { author: [ :profile_picture ] } ] }, { likes: [:liker] } )
	    .where(user_id: @user.id).reverse

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
