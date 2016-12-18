# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  email              :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  first_name         :string           not null
#  last_name          :string           not null
#  birthday           :date
#  gender             :string
#  profile_picture_id :integer
#  banner_picture_id  :integer
#

require 'test_helper'
require 'byebug'

class UserTest < ActiveSupport::TestCase
  def user_params
    {
      email: "email",
      password_digest: "asdfghjkl",
      session_token: "asdfghjkl",
      first_name: "Chase",
      last_name: "Martin",
      birthday: DateTime.now.to_date,
      gender: "Male",
      profile_picture_id: 1,
      banner_picture_id: 1
    }
  end

  test "should not validate user without first name" do
    params = user_params
    params[:first_name] = nil
    user = User.new(params)
    assert_not user.valid?
  end

  test "should not validate user without last name" do
    params = user_params
    params[:last_name] = nil
    user = User.new(params)
    assert_not user.valid?
  end

  test "should not validate user without email" do
    params = user_params
    params[:email] = nil
    user = User.new(params)
    assert_not user.valid?
  end

  test "should not validate user without birthday" do
    params = user_params
    params[:birthday] = nil
    user = User.new(params)
    assert_not user.valid?
  end

  test "should not validate user without gender" do
    params = user_params
    params[:gender] = nil
    user = User.new(params)
    assert_not user.valid?
  end

  test "should not validate user without profile picture id" do
    params = user_params
    params[:profile_picture_id] = nil
    user = User.new(params)
    assert_not user.valid?
  end

  test "should not validate user without banner picture id" do
    params = user_params
    params[:banner_picture_id] = nil
    user = User.new(params)
    assert_not user.valid?
  end

  test "should not validate user without password_digest" do
    params = user_params
    params[:password_digest] = nil
    user = User.new(params)
    assert_not user.valid?
  end

  test "should set session token before validation" do
    params = user_params
    params[:session_token] = nil
    user = User.new(params)
    assert user.valid?
  end
end
