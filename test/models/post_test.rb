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
  test "should not validate post without author id" do
    post = build(:post, author_id: nil)
    assert_not post.valid?
  end

  test "should not validate post without user id" do
    post = build(:post, user_id: nil)
    assert_not post.valid?
  end

  test "should not validate post without content" do
    post = build(:post, content: nil)
    assert_not post.valid?
  end
end
