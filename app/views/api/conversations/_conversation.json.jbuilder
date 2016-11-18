require 'byebug'

json.extract! conversation, :id

json.users({})
json.users do
  conversation.users.each do |user|
    json.set! user.id do
      json.partial! 'api/users/user', user: user
    end
  end
end

json.messages({})
json.messages do
  conversation.messages.each do |message|
    json.set! message.id do
      json.partial! 'api/messages/message', message: message
    end
  end
end
