require 'byebug'

json.id friend_request.id

json.requester do
  json.profilePicture(asset_path(friend_request.user.profile_picture.image.url(:profile_picture)))
  json.full_name "#{friend_request.user.first_name} #{friend_request.user.last_name}"
  json.id friend_request.user.id
end

json.requested do
  json.full_name "#{friend_request.friend.first_name} #{friend_request.friend.last_name}"
  json.id friend_request.friend.id
end
