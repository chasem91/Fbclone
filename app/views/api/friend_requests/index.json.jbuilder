@friend_requests.each do |request|
  json.set! request.id do
    json.requester_name "#{request.user.first_name} #{request.user.last_name}"
    json.requester_id request.user.id
  end
end
