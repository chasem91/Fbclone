json.extract! comment, :content, :id, :created_at
json.author do
  json.full_name "#{comment.author.first_name} #{comment.author.last_name}"
  json.id comment.author.id
end
