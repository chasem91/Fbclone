# == Schema Information
#
# Table name: user_conversations
#
#  id              :integer          not null, primary key
#  user_id         :integer          not null
#  conversation_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserConversationTest < ActiveSupport::TestCase
  test "should not validate user conversation without user id" do
    user_conversation = build(:user_conversation, user_id: nil)
    assert_not user_conversation.valid?
  end

  test "should not validate user conversation without conversation_id" do
    user_conversation = build(:user_conversation, conversation_id: nil)
    assert_not user_conversation.valid?
  end
end
