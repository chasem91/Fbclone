require 'test_helper'

class UserFlowTest < ActionDispatch::IntegrationTest
  test "can show a user" do
    user = create(:user)
    photo = Photo.create(user_id: user.id)
    user.update(profile_picture_id: photo.id, banner_picture_id: photo.id)
    get "/api/users/#{user.id}"
    assert_response :success
  end
end
