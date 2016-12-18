class Api::UsersController < ApplicationController
  def index
    @users = params[:search] == "" ? [] : User.includes(:profile_picture).search(params[:search])
    render "api/users/index"
  end

  def show
    @user = User.includes(
    :photos,
    { friends: [ :profile_picture ] },
    { friend_requests: [ { user: [ :profile_picture ] }, { friend: [ :profile_picture ] } ] },
    { requested_friends: [ { user: [ :profile_picture ] }, { friend: [ :profile_picture ] } ] },
    { conversations: [ { messages: [ { user: [ :profile_picture ] } ] }, { users: [ :profile_picture ] } ] },
    :profile_picture,
    :banner_picture
    ).find(params[:id])

    if current_user && current_user.id == params[:id].to_i
      friend_ids = @user.friends.map { |friend| friend.id }
      friend_ids << @user.id
      @newsfeed_posts = Post
			.includes( { author: [ :profile_picture ] }, { user: [ :profile_picture ] }, { comments: [ { likes: [:liker] }, { author: [ :profile_picture ] } ] }, { likes: [:liker] } )
			.where(author_id: friend_ids).reverse
    else
      @newsfeed_posts = []
    end
    @timeline_posts = Post
    .includes( { author: [ :profile_picture ] }, { user: [ :profile_picture ] }, { comments: [ { likes: [:liker] }, { author: [ :profile_picture ] } ] }, { likes: [:liker] } )
    .where(user_id: @user.id).reverse

    render "api/users/show"
  end

	def create
		@user = User.new(user_params)
		if @user.save
			login(@user)
      @newsfeed_posts = []
      @timeline_posts = []
			render "api/users/show"
		else
			render json: @user.errors.full_messages, status: 422
		end
	end

  def update
    @user = User.find(params[:id])
    session_token = @user.session_token;
    if @user.update(user_params)
      @user.update(session_token: session_token)
      render "api/users/update"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

	private

	def user_params
		params.require(:user).permit(
      :password,
      :first_name,
      :last_name,
      :birthday,
      :gender,
      :email,
      :profile_picture_id,
      :banner_picture_id
    )
	end
end
