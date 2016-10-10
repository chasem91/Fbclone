# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime
#  updated_at :datetime
#

class Friendship < ActiveRecord::Base
  validates :user_id, :friend_id

  belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :friend,
    foreign_key: :friend_id,
    class_name: :User
end
