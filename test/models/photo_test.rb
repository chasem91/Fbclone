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
  def photo_params
    {
      image_file_name: 'file_name',
      image_content_type: 'content_type',
      image_file_size: 1000,
      user_id: 1
    }
  end

  test "should not validate photo without image file name" do
    params = photo_params
    params[:image_file_name] = nil
    photo = Photo.new(params)
    assert_not photo.valid?
  end

  test "should not validate photo without image content type" do
    params = photo_params
    params[:image_content_type] = nil
    photo = Photo.new(params)
    assert_not photo.valid?
  end

  test "should not validate photo without image file size" do
    params = photo_params
    params[:image_file_size] = nil
    photo = Photo.new(params)
    assert_not photo.valid?
  end

  test "should not validate photo without user id" do
    params = photo_params
    params[:user_id] = nil
    photo = Photo.new(params)
    assert_not photo.valid?
  end
end
