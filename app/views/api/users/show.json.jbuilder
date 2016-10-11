require 'byebug'

json.partial! 'api/users/user', user: @user

json.newsfeed_posts do
  @newsfeed_posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end




#   json.author do
#     json.id post.author.id
#     json.full_name "#{post.author.first_name} #{post.author.first_name}"
#   end
#   json.author do
#     json.id post.author.id
#     json.full_name "#{post.author.first_name} #{post.author.first_name}"
#   end
#   json.id post.id
#   json.content post.content
#   json.created_at post.created_at
