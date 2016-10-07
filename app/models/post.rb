# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  profile_id :integer          not null
#  content    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ActiveRecord::Base
  validates :author_id, :profile_id, :content, null: false

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments

  def comments_with_author
    self.comments.includes(:author)
  end
end
