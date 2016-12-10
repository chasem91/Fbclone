json.profilePicture(asset_path(user.profile_picture.image.url(:profile_picture)))
json.extract! user, :id, :first_name, :last_name, :gender
json.birthday user.birthday.strftime('%b %d, %Y')
