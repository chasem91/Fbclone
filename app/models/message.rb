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

class Message < ActiveRecord::Base
  validates :content, :user_id, :conversation_id, presence: true
  belongs_to :user
  belongs_to :conversation
end
