require 'byebug'

json.partial! 'api/users/user', user: @user

json.newsfeed_posts do
  @newsfeed_posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.friends do
  @user.friends.each do |friend|
    json.set! friend.id do
      json.partial! 'api/users/user', user: friend
    end
  end
end
