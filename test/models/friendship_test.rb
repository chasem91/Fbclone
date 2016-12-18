# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

require 'test_helper'

class FriendshipTest < ActiveSupport::TestCase
  def friendship_params
    {
      user_id: 1,
      friend_id: 1
    }
  end

  test "should not validate friendship without user_id" do
    params = friendship_params
    params[:user_id] = nil
    friendship = Friendship.new(params)
    assert_not friendship.valid?
  end

  test "should not validate friendship without friend_id" do
    params = friendship_params
    params[:friend_id] = nil
    friendship = Friendship.new(params)
    assert_not friendship.valid?
  end
end
