json.set! @friend_request.id do
  json.partial! 'api/friend_requests/friend_request', friend_request: @friend_request
end


if @conversation
  json.conversation do
    json.set! @conversation.id do
      json.partial! 'api/conversations/conversation', conversation: @conversation
    end
  end
end
