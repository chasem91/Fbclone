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
  test "should not validate comment without author_id" do
    comment = build(:comment, author_id: nil)
    assert_not comment.valid?
  end

  test "should not validate comment without post_id" do
    comment = build(:comment, post_id: nil)
    assert_not comment.valid?
  end

  test "should not validate comment without content" do
    comment = build(:comment, content: nil)
    assert_not comment.valid?
  end
end
