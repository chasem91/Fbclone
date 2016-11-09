require 'byebug'

json.partial! 'api/users/user', user: @user

json.friends do
  @user.friends.each do |friend|
    json.set! friend.id do
      json.partial! 'api/users/user', user: friend
    end
  end
end

json.timelinePosts do
  @timeline_posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.friendRequests do
  @user.friend_requests.each do |request|
    json.set! request.id do
      json.partial! 'api/friend_requests/friend_request', friend_request: request
    end
  end
end

json.requestedFriends do
  @user.requested_friends.each do |request|
    json.set! request.id do
      json.partial! 'api/friend_requests/friend_request', friend_request: request
    end
  end
end

json.newsfeedPosts do
  @newsfeed_posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end
