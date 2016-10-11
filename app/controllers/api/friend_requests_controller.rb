require 'byebug';

class Api::FriendRequestsController < ApplicationController
  def index
    @friend_requests = FriendRequest.includes(:user)
      .where("friend_id = ? AND approved = ?", params[:user_id], "false")
    render 'api/friend_requests/index'
  end
end
