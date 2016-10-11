json.set! @friendship.friend.id do
  json.full_name "#{@friendship.friend.first_name} #{@friendship.friend.last_name}"
  json.id @friendship.friend.id
end
