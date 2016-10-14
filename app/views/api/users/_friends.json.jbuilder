require 'byebug'

json.extract! user, :id, :first_name, :last_name, :gender
json.birthday user.birthday.strftime('%b %d, %Y')

json.friends do
  user.friends.each do |friend|
    json.set! friend.id do
      json.extract! user, :id, :first_name, :last_name, :birthday, :gender
    end
  end
end
