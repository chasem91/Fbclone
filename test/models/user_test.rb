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
  test "should not validate user without a first name" do
    user = build(:user, first_name: nil)
    assert_not user.valid?, "Validated the user without a first name"
  end

  test "should not validate user without a last name" do
    user = build(:user, last_name: nil)
    assert_not user.valid?, "Validated the user without a last name"
  end

  test "should not validate user without a email" do
    user = build(:user, email: nil)
    assert_not user.valid?, "Validated the user without a email"
  end

  test "should not validate user without a birthday" do
    user = build(:user, birthday: nil)
    assert_not user.valid?, "Validated the user without a birthday"
  end

  test "should not validate user without a gender" do
    user = build(:user, gender: nil)
    assert_not user.valid?, "Validated the user without a gender"
  end

  test "should not validate user without a profile picture id" do
    user = build(:user, profile_picture_id: nil)
    assert_not user.valid?, "Validated the user without a profile picture id"
  end

  test "should not validate user without a banner picture id" do
    user = build(:user, banner_picture_id: nil)
    assert_not user.valid?, "Validated the user without a banner picture id"
  end

  test "should not validate user without a password digest" do
    user = build(:user, password_digest: nil)
    assert_not user.valid?, "Validated the user without a password digest"
  end

  test "should set session token after initalization" do
    user = build(:user, session_token: nil)
    assert user.session_token, "Initialized user without setting a session token"
  end
end
