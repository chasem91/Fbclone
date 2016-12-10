json.partial! 'api/users/user', user: @user

json.photos({})
json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.partial! 'api/photos/photo', photo: photo
    end
  end
end

json.profilePicture(asset_path(@user.profile_picture.image.url(:profile_picture)))

json.bannerPicture(asset_path(@user.banner_picture.image.url(:banner)))

json.users([])

json.currentSection(0)

json.chatBoxes({})

json.friends({})
json.friends do
  @user.friends.each do |friend|
    json.set! friend.id do
      json.partial! 'api/users/user', user: friend
    end
  end
end

json.conversations({})
json.conversations do
  @user.conversations.each do |conversation|
    json.set! conversation.id do
      json.partial! 'api/conversations/conversation', conversation: conversation
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
