# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  content    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  def post_params
    {
      author_id: 1,
      user_id: 1,
      content: 'content'
    }
  end

  test "should not validate post without author id" do
    params = post_params
    params[:author_id] = nil
    post = Post.new(params)
    assert_not post.valid?
  end

  test "should not validate post without user id" do
    params = post_params
    params[:user_id] = nil
    post = Post.new(params)
    assert_not post.valid?
  end

  test "should not validate post without content" do
    params = post_params
    params[:content] = nil
    post = Post.new(params)
    assert_not post.valid?
  end
end
