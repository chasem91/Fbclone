json.set! @post.id do
  json.partial! 'api/posts/post', post: @post
end
