# == Schema Information
#
# Table name: likes
#
#  id            :integer          not null, primary key
#  liker_id      :integer          not null
#  likeable_id   :integer          not null
#  likeable_type :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Like < ActiveRecord::Base
  validates :liker_id, :likeable_id, :likeable_type, presence: true

  belongs_to :likeable, polymorphic: true
  belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User
end
