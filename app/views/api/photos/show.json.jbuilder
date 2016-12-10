json.id(@photo.id)
json.userId(@photo.user_id)
json.url asset_path(@photo.image.url(:profile_picture))
