require 'byebug'

json.partial! 'api/users/user', user: @user

json.chatBoxes({})

json.friends({})
json.friends do
  @user.friends.each do |friend|
    json.set! friend.id do
      json.partial! 'api/users/user', user: friend
    end
  end
end

json.activeUsers({})
json.activeUsers do
  @user.friends.each do |friend|
    json.set! friend.id do
      json.partial! 'api/users/user', user: friend
    end
  end
end

json.timelinePosts({})
json.timelinePosts do
  @timeline_posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.receivedRequests({})
json.receivedRequests do
  @user.friend_requests.each do |request|
    next if request.approved
    json.set! request.id do
      json.partial! 'api/friend_requests/friend_request', friend_request: request
    end
  end
end

json.sentRequests({})
json.sentRequests do
  @user.requested_friends.each do |request|
    json.set! request.id do
      json.partial! 'api/friend_requests/friend_request', friend_request: request
    end
  end
end

json.newsfeedPosts({})
json.newsfeedPosts do
  @newsfeed_posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end
