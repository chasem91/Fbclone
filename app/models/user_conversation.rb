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

class UserConversation < ActiveRecord::Base
  belongs_to :user
  belongs_to :conversation
end
