require 'byebug'

json.extract! user, :id, :first_name, :last_name, :gender
json.birthday user.birthday.strftime('%b %d, %Y')

json.friends do
  user.friends.each do |friend|
    json.set! friend.id do
      json.extract! user, :id, :first_name, :last_name, :birthday, :gender
    end
  end
end

json.friend_requests do
  user.friend_requests.each do |friend_request|
    json.set! friend_request.id do
      json.id friend_request.id
      json.requester do
        json.full_name "#{friend_request.user.first_name} #{friend_request.user.last_name}"
        json.id friend_request.user.id
      end
      json.requested do
        json.full_name "#{friend_request.friend.first_name} #{friend_request.friend.last_name}"
        json.id friend_request.friend.id
      end
    end
  end
end

json.requested_friends do
  user.requested_friends.each do |friend_request|
    json.set! friend_request.id do
      json.id friend_request.id
      json.requester do
        json.full_name "#{friend_request.user.first_name} #{friend_request.user.last_name}"
        json.id friend_request.user.id
      end
      json.requested do
        json.full_name "#{friend_request.friend.first_name} #{friend_request.friend.last_name}"
        json.id friend_request.friend.id
      end
    end
  end
end
