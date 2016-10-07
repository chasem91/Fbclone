class Photo < ActiveRecord::Base
  has_attached_file :image, default_url: "seeds/max_profile.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
