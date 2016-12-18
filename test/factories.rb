FactoryGirl.define do
  factory :user do
    password_digest "passworddigest"
    session_token "sessiontoken"
    first_name "firstname"
    last_name "lastname"
    email { "#{first_name}@example.com" }
    birthday DateTime.now.to_date
    gender "male"
    profile_picture_id 1
    banner_picture_id 1

    initialize_with { new(attributes) }
  end

  factory :comment do
    author_id 1
    post_id 1
    content 'content'
  end

  factory :friend_request do
    user_id 1
    friend_id 1
    approved false
  end

  factory :friendship do
    user_id 1
    friend_id 1
  end

  factory :like do
    liker_id 1
    likeable_id 1
    likeable_type 'Post'
  end

  factory :message do
    user_id 1
    conversation_id 1
    content 'content'
  end

  factory :photo do
    image_file_name 'file_name'
    image_content_type 'content_type'
    image_file_size 1000
    user_id 1
  end

  factory :post do
    author_id 1
    user_id 1
    content 'content'
  end

  factory :user_conversation do
    user_id 1
    conversation_id 1
  end
end
