require 'byebug';

class Api::FriendRequestsController < ApplicationController
  def index
    @friend_requests = FriendRequest.includes(:user)
      .where("friend_id = ? AND approved = ?", params[:user_id], "false")

    @requested_friends = FriendRequest.includes(:friend)
      .where("user_id = ? AND approved = ?", params[:user_id], "false")

    render 'api/friend_requests/index'
  end

  def create
    request = FriendRequest.new(
      user_id: params[:user_id],
      friend_id: params[:friend_id],
      approved: 'false'
    )
    if request.save
      @friend_request = FriendRequest.includes(:friend).where(
        "user_id = ? AND friend_id = ?", request.user_id, request.friend_id
      )[0]
      render 'api/friend_requests/show'
    else
      render json: {
        errors: request.errors.full_messages,
        status: 422
      }
    end
  end
end
