require 'byebug'

class Api::FriendshipsController < ApplicationController
  def create
    friend_request = FriendRequest.find_by(
      user_id: params[:user_id],
      friend_id: params[:friend_id]
    )
    if friend_request.update(approved: 'true')
      friendship = Friendship.new(
        user_id: params[:user_id],
        friend_id: params[:friend_id]
      )
      duplicate = Friendship.new(
        user_id: params[:friend_id],
        friend_id: params[:user_id]
      )
    end
    duplicate.save
    if friendship && friendship.save
      @friendship = Friendship
        .includes(:user, :friend)
        .where(
          "user_id = ? AND friend_id = ?",
          friendship.user_id, friendship.friend_id
        )
      render 'api/friendships/show'
    else
      if friendship
        render json: {
          errors: friendship.errors.full_messages,
          status: 422
        }
      else
        render json: {
          errors: ['friendship acceptance not proccessed'],
          status: 422
        }
      end
    end
  end
end
