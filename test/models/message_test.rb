# == Schema Information
#
# Table name: messages
#
#  id              :integer          not null, primary key
#  content         :string           not null
#  user_id         :integer          not null
#  conversation_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  test "should not validate message without user_id" do
    message = build(:message, user_id: nil)
    assert_not message.valid?
  end

  test "should not validate message without conversation_id" do
    message = build(:message, conversation_id: nil)
    assert_not message.valid?
  end

  test "should not validate message without content" do
    message = build(:message, content: nil)
    assert_not message.valid?
  end
end
