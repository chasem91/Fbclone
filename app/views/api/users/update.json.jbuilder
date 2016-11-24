require 'byebug'

json.partial! 'api/users/user', user: @user

json.profilePicture(asset_path(@user.profile_picture.image.url))
