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
  def like_params
    {
      liker_id: 1,
      likeable_id: 1,
      likeable_type: 'Post'
    }
  end

  test "should not validate like without liker_id" do
    params = like_params
    params[:liker_id] = nil
    like = Like.new(params)
    assert_not like.valid?
  end

  test "should not validate like without likeable_id" do
    params = like_params
    params[:likeable_id] = nil
    like = Like.new(params)
    assert_not like.valid?
  end

  test "should not validate like without likeable_type" do
    params = like_params
    params[:likeable_type] = nil
    like = Like.new(params)
    assert_not like.valid?
  end
end
