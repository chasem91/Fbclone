# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

(1..26).each do |i|
  Photo.create(image: File.new("app/assets/images/seeds/#{i}.jpg"), user_id: i)
end

User.create(
  email: "guest@email.com",
  password_digest: BCrypt::Password.create("password"),
  session_token: "kahg;fkjhga;skjdfhg;",
  first_name: "Guest",
  last_name: "User",
  birthday: "01-01-1990",
  gender: "male",
  profile_picture_id: 9,
  banner_picture_id: 1
)

User.create(
  email: "chasemartin91@gmail.com",
  password_digest: BCrypt::Password.create("password"),
  session_token: "kahg;fkjqpa;skjdfhg;",
  first_name: "Chase",
  last_name: "Martin",
  birthday: "01-01-1991",
  gender: "male",
  profile_picture_id: 2,
  banner_picture_id: 22
)

(3..26).each do |i|
  user = User.create(
    email: Faker::Internet.free_email,
    password_digest: BCrypt::Password.create("password"),
    session_token: "kjslkjafhldskhjfas",
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    birthday: Faker::Date.between(50.years.ago, Date.today),
    gender: "female",
    profile_picture_id: i,
    banner_picture_id: ((i + 8) % 26) + 1)
  )
end

(1..26).each do |i|
  3.times do
    Post.create(
      author_id: rand(1..26),
      user_id: i,
      content: Faker::Hipster.sentence
    )
  end
end

(1..78).each do |i|
  8.times do
    Comment.create(
      author_id: rand(1..26),
      post_id: i,
      content: Faker::Hipster.sentence
    )
  end
end

(3..26).each do |i|
  FriendRequest.create(
    user_id: i,
    friend_id: 1,
    approved: false
  )
end
