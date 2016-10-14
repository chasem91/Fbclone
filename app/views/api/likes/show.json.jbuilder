require 'byebug'

json.set! @like.id do
  json.partial! 'api/likes/like', like: @like
end
