# == Schema Information
#
# Table name: conversations
#
#  id         :integer          not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Conversation < ActiveRecord::Base
  has_many :messages
  has_many :user_conversations
  has_many :users, through: :user_conversations
end
