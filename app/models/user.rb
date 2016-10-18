# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  first_name      :string           not null
#  last_name       :string           not null
#  birthday        :date
#  gender          :string
#

class User < ActiveRecord::Base
	attr_reader :password

	validates :email, :password_digest, :session_token, presence: true
	validates :email, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: :true

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

	scope :search, -> (string) {
    select('(first_name || " " || last_name) as \'full_name\', *')
    where(
    'LOWER(email) like LOWER(?)
    OR LOWER(first_name) like LOWER(?)
    OR LOWER(last_name) like LOWER(?)
    OR LOWER(first_name || \' \' || last_name) like LOWER(?)',
    "%#{string}%", "%#{string}%","%#{string}%","%#{string}%") }

  has_many :timeline_posts,
    foreign_key: :profile_id,
    class_name: :Post

  has_many :friend_requests,
    foreign_key: :friend_id,
    class_name: :FriendRequest

  has_many :requested_friends,
    foreign_key: :user_id,
    class_name: :FriendRequest

  has_many :friend_request_details,
    through: :friend_requests,
    source: :user

  has_many :requested_friend_details,
    through: :requested_friends,
    source: :friend

  has_many :friendships

  has_many :friends,
    through: :friendships,
    source: :friend

	def name
		"#{self.first_name} #{self.last_name}"
	end

  def timeline_posts_with_comments
    self.timeline_posts.includes(:comments)
  end

	def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials email, password
		user = User.find_by(email: email)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while User.find_by(session_token: self.session_token)
			self.session_token = new_session_token
		end
	end

end
