require 'byebug'

json.profilePicture(asset_path(user.profile_picture.image.url))
json.extract! user, :id, :first_name, :last_name, :gender
json.birthday user.birthday.strftime('%b %d, %Y')
