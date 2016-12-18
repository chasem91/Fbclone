require 'test_helper'

class UserFlowTest < ActionDispatch::IntegrationTest
  setup do
    @user = create(:user)
    photo = Photo.create(user_id: @user.id)
    @user.update(profile_picture_id: photo.id, banner_picture_id: photo.id)
  end

  teardown do
    # Rails.cache.clear
  end

  test "should show user" do
    get "/api/users/#{@user.id}"
    assert_response :success
  end

  test "should update user" do
    patch api_user_url(@user), user: { first_name: "updated" }
    @user.reload
    assert_equal "updated", @user.first_name
  end
end
