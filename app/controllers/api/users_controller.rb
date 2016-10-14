require 'byebug'

class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render "api/users/index"
  end

  def show
    @user = User.includes(:friends).find(params[:id])
    friend_ids = @user.friends.map { |friend| friend.id }
    friend_ids << @user.id
    @newsfeed_posts = Post
      .includes(:author, :user, { comments: [ { likes: [:liker] } ] }, { likes: [:liker] } )
      .where(author_id: friend_ids).reverse
    render "api/users/show"
  end

	def create
		@user = User.new(user_params)
		if @user.save
			login(@user)
      @newsfeed_posts = []
			render "api/users/show"
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
      :email
    )
	end
end
