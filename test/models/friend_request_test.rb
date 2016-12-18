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
  test "should not validate friend request without user id" do
    friend_request = build(:friend_request, user_id: nil)
    assert_not friend_request.valid?
  end

  test "should not validate friend request without friend id" do
    friend_request = build(:friend_request, friend_id: nil)
    assert_not friend_request.valid?
  end

  test "should not validate friend request without approved status" do
    friend_request = build(:friend_request, approved: nil)
    assert_not friend_request.valid?
  end
end
