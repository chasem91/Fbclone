# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  content    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Post < ActiveRecord::Base
  validates :author_id, :content, null: false

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :user

  has_many :comments

  has_many :likes, as: :likeable

  def comments_with_author
    self.comments.includes(:author)
  end

end
