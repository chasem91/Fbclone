json.set! @friend.id do
  json.full_name "#{@friend.first_name} #{@friend.last_name}"
  json.id @friend.id
end
