json.extract! message, :id, :created_at, :content, :conversation_id

json.user({})
json.user do
  json.partial! 'api/users/user', user: message.user
end
