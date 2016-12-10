json.partial! 'api/users/user', user: @user

json.profilePicture(asset_path(@user.profile_picture.image.url(:profile_picture)))

json.bannerPicture(asset_path(@user.banner_picture.image.url(:banner)))
