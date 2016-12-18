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
  test "should not validate user without first name" do
    user = build(:user, first_name: nil)
    assert_not user.valid?
  end

  test "should not validate user without last name" do
    user = build(:user, last_name: nil)
    assert_not user.valid?
  end

  test "should not validate user without email" do
    user = build(:user, email: nil)
    assert_not user.valid?
  end

  test "should not validate user without birthday" do
    user = build(:user, birthday: nil)
    assert_not user.valid?
  end

  test "should not validate user without gender" do
    user = build(:user, gender: nil)
    assert_not user.valid?
  end

  test "should not validate user without profile picture id" do
    user = build(:user, profile_picture_id: nil)
    assert_not user.valid?
  end

  test "should not validate user without banner picture id" do
    user = build(:user, banner_picture_id: nil)
    assert_not user.valid?
  end

  test "should not validate user without password_digest" do
    user = build(:user, password_digest: nil)
    assert_not user.valid?
  end

  test "should set session token before validation" do
    user = build(:user, session_token: nil)
    assert user.valid?
  end
end
