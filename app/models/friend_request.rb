# == Schema Information
#
# Table name: friend_requests
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  approved   :boolean
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FriendRequest < ActiveRecord::Base
  validates :user_id, :friend_id, presence: true
  validates :approved, inclusion: [true, false]

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :friend,
    foreign_key: :friend_id,
    class_name: :User
end
