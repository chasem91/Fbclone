# == Schema Information
#
# Table name: likes
#
#  id            :integer          not null, primary key
#  liker_id      :integer          not null
#  likeable_id   :integer          not null
#  likeable_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

require 'test_helper'

class LikeTest < ActiveSupport::TestCase
  test "should not validate like without liker_id" do
    like = build(:like, liker_id: nil)
    assert_not like.valid?
  end

  test "should not validate like without likeable_id" do
    like = build(:like, likeable_id: nil)
    assert_not like.valid?
  end

  test "should not validate like without likeable_type" do
    like = build(:like, likeable_type: nil)
    assert_not like.valid?
  end
end
