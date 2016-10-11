json.set! @friend_request.friend.id do
  json.full_name "#{@friend_request.friend.first_name} #{@friend_request.friend.last_name}"
  json.id @friend_request.friend.id
end
