# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

20.times do
  user = User.new(
    username: Faker::Internet.user_name,
    email: Faker::Internet.free_email,
    password_digest: BCrypt::Password.create("password"),
    session_token: "kjslkjafhldskhjfas"
  )
  if user.save
    Profile.create(
      user_id: user.id,
      first_name: Faker::Name.first_name,
      last_name: Faker::Name.last_name,
      birthday: Faker::Date.between(100.years.ago, Date.today),
      gender: "female"
    )
  end
end

user = User.new(
  username: "chasem91",
  email: "chasemartin91@gmail.com",
  password_digest: BCrypt::Password.create("password"),
  session_token: "kahg;fkjhga;skjdfhg;"
)
if user.save
  Profile.create(
    user_id: user.id,
    first_name: "Chase",
    last_name: "Martin",
    birthday: "02-05-1991",
    gender: "male"
  )
end