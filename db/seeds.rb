# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(
  email: "guest@email.com",
  password_digest: BCrypt::Password.create("password"),
  session_token: "kahg;fkjhga;skjdfhg;",
  first_name: "Guest",
  last_name: "User",
  birthday: "01-01-1990",
  gender: "male"
)

10.times do
  user = User.create(
    email: Faker::Internet.free_email,
    password_digest: BCrypt::Password.create("password"),
    session_token: "kjslkjafhldskhjfas",
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    birthday: Faker::Date.between(50.years.ago, Date.today),
    gender: "female"
  )
end

(1..10).each do |i|
  3.times do
    Post.create(
      author_id: rand(1..10),
      user_id: i,
      content: Faker::Hipster.sentence
    )
  end
end

(1..30).each do |i|
  8.times do
    Comment.create(
      author_id: rand(1..10),
      post_id: i,
      content: Faker::Hipster.sentence
    )
  end
end

(2..8).each do |i|
  FriendRequest.create(
    user_id: i,
    friend_id: 1,
    approved: false
  )
end
