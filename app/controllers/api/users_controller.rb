require 'byebug'

class Api::UsersController < ApplicationController
  def index
    @users = params[:search] == "" ? [] : User.search(params[:search])
    render "api/users/index"
  end

  def show
    if current_user.id == params[:id].to_i
      @user = User.includes(
        :friends,
        { friend_requests: [:user, :friend] },
        { requested_friends: [:user, :friend] },
        { conversations: [ { messages: [ :user ] }, :users ] }
      ).find(params[:id])

      friend_ids = @user.friends.map { |friend| friend.id }
      friend_ids << @user.id

      @newsfeed_posts = Post
      .includes(
        :author,
        :user,
        { comments: [ { likes: [ :liker ] }, :author ] },
        { likes: [:liker] }
      )
      .where(author_id: friend_ids).reverse
    else
      @user = User.includes(:friends).find(params[:id])
      @newsfeed_posts = []
    end

    @timeline_posts = Post
    .includes(:author, :user, { comments: [ { likes: [:liker] }, :author ] }, { likes: [:liker] } )
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
