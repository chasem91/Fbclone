require 'byebug';

class Api::FriendRequestsController < ApplicationController
  def index
    @friend_requests = FriendRequest.includes(:user).where("friend_id = ?", params[:user_id])
    render 'api/friend_requests/index'
  end
end
