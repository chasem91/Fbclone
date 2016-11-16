require 'byebug'

json.extract! post, :id, :content
json.time_ago "#{time_ago_in_words(post.created_at)} ago"

json.author do
  json.full_name "#{post.author.first_name} #{post.author.last_name}"
  json.id post.author.id
end

json.user do
  json.full_name "#{post.user.first_name} #{post.user.last_name}"
  json.id post.user.id
end

json.comment({})
json.comments do
  post.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'api/comments/comment', comment: comment
    end
  end
end

json.likes({})
json.likes do
  post.likes.each do |like|
    json.set! like.id do
      json.partial! 'api/likes/like', like: like
    end
  end
end
