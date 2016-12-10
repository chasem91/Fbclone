# json.friend_requests do
#   @friend_requests.each do |request|
#     json.set! request.user.id do
#       json.requester_name "#{request.user.first_name} #{request.user.last_name}"
#       json.requester_id request.user.id
#     end
#   end
# end
# json.requested_friends do
#   @requested_friends.each do |request|
#     json.set! request.friend.id do
#       json.requested_name "#{request.friend.first_name} #{request.friend.last_name}"
#       json.requested_id request.friend.id
#     end
#   end
# end
