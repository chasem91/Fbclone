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
  test "should not validate friendship without user_id" do
    friendship = build(:friendship, user_id: nil)
    assert_not friendship.valid?
  end

  test "should not validate friendship without friend_id" do
    friendship = build(:friendship, friend_id: nil)
    assert_not friendship.valid?
  end
end
