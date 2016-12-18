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
  def user_conversation_params
    {
      user_id: 1,
      conversation_id: 1
    }
  end

  test "should not validate user conversation without user id" do
    params = user_conversation_params
    params[:user_id] = nil
    user_conversation = UserConversation.new(params)
    assert_not user_conversation.valid?
  end

  test "should not validate user conversation without conversation_id" do
    params = user_conversation_params
    params[:conversation_id] = nil
    user_conversation = UserConversation.new(params)
    assert_not user_conversation.valid?
  end
end
