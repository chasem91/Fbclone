json.array! @posts do |post|
  json.extract! post, :id, :author_id, :user_id, :content, :created_at
end
