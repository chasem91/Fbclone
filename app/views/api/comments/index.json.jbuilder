@comments.each do |comment|
  json.set! "#{comment.id}" do
    json.extract! comment, :id, :post_id, :author_id, :content, :created_at
  end
end
