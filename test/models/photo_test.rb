# == Schema Information
#
# Table name: photos
#
#  id                 :integer          not null, primary key
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  user_id            :integer
#

require 'test_helper'

class PhotoTest < ActiveSupport::TestCase
  test "should not validate photo without user id" do
    photo = build(:photo, user_id: nil)
    assert_not photo.valid?
  end

  test "should validate photo with params expected to be valid" do
    photo = build(:photo)
    assert photo.valid?, "did not validate photo with params expected to be valid"
  end
end
