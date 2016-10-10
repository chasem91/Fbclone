require 'byebug'

json.extract! post, :id, :content, :created_at
json.author do
  json.full_name "#{post.author.first_name} #{post.author.last_name}"
  json.id post.author.id
end
json.user do
  json.full_name "#{post.user.first_name} #{post.user.last_name}"
  json.id post.user.id
end
