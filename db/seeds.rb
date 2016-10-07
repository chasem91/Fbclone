# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

19.times do
  user = User.create(
    email: Faker::Internet.free_email,
    password_digest: BCrypt::Password.create("password"),
    session_token: "kjslkjafhldskhjfas",
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    birthday: Faker::Date.between(100.years.ago, Date.today),
    gender: "female"
  )
end

User.create(
  email: "guest@email.com",
  password_digest: BCrypt::Password.create("password"),
  session_token: "kahg;fkjhga;skjdfhg;",
  first_name: "Firstname",
  last_name: "Lastname",
  birthday: "01-01-1990",
  gender: "male"
)

Photo.create

(1..20).each do |i|
  (1..4).each do
    Post.create(
      author_id: rand(20),
      profile_id: i,
      content: Faker::Hipster.sentence
    )
  end
end

(1..80).each do |i|
  (1..2).each do
    Comment.create(
      author_id: rand(20),
      post_id: i,
      content: Faker::Hipster.sentence
    )
  end
end
