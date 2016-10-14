require 'byebug'

json.extract! user, :id, :first_name, :last_name, :gender
json.birthday user.birthday.strftime('%b %d, %Y')
