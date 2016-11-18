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
  # test "the truth" do
  #   assert true
  # end
end
