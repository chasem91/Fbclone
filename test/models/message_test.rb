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
  def message_params
    {
      user_id: 1,
      conversation_id: 1,
      content: 'content'
    }
  end

  test "should not validate message without user_id" do
    params = message_params
    params[:user_id] = nil
    message = Message.new(params)
    assert_not message.valid?
  end

  test "should not validate message without conversation_id" do
    params = message_params
    params[:conversation_id] = nil
    message = Message.new(params)
    assert_not message.valid?
  end

  test "should not validate message without content" do
    params = message_params
    params[:content] = nil
    message = Message.new(params)
    assert_not message.valid?
  end
end
