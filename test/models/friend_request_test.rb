# == Schema Information
#
# Table name: friend_requests
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  approved   :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class FriendRequestTest < ActiveSupport::TestCase
  def friend_request_params
    {
      user_id: 1,
      friend_id: 1,
      approved: false
    }
  end

  test "should not validate friend request without user_id" do
    params = friend_request_params
    params[:user_id] = nil
    friend_request = FriendRequest.new(params)
    assert_not friend_request.valid?
  end

  test "should not validate friend request without friend_id" do
    params = friend_request_params
    params[:friend_id] = nil
    friend_request = FriendRequest.new(params)
    assert_not friend_request.valid?
  end

  test "should not validate friend request without approved status" do
    params = friend_request_params
    params[:approved] = nil
    friend_request = FriendRequest.new(params)
    assert_not friend_request.valid?
  end
end
