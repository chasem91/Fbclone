require 'byebug'

class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render "api/users/index"
  end

  def show
    @user = User.includes(:friends).find(params[:id])
    @user = User.includes(:friends).find(@user.id)
    friend_ids = @user.friends.map { |friend| friend.id }
    @newsfeed_posts = Post.includes(:author, :user, :comments).where(author_id: friend_ids)
    render "api/users/show"
  end

	def create
		@user = User.new(user_params)
		if @user.save
			login(@user)
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
