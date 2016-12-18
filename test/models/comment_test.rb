# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  post_id    :integer          not null
#  content    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  def comment_params
    {
      author_id: 1,
      post_id: 1,
      content: 'content'
    }
  end

  test "should not validate comment without author_id" do
    params = comment_params
    params[:author_id] = nil
    comment = Comment.new(params)
    assert_not comment.valid?
  end

  test "should not validate comment without post_id" do
    params = comment_params
    params[:post_id] = nil
    comment = Comment.new(params)
    assert_not comment.valid?
  end

  test "should not validate comment without content" do
    params = comment_params
    params[:content] = nil
    comment = Comment.new(params)
    assert_not comment.valid?
  end
end
