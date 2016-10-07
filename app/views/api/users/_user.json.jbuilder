# json.extract! user, :id, :first_name, :last_name, :birthday, :gender
# json.posts do
#   json.array! user.timeline_posts_with_comments do |post|
#     json.extract! post, :id, :profile_id, :content, :created_at
#     json.author do
#       json.id post.author_id
#       json.full_name "#{post.author.first_name} #{post.author.last_name}"
#     end
#     json.comments do
#       json.array! post.comments_with_author do |comment|
#         json.extract! comment, :id, :post_id, :content, :created_at
#         json.author do
#           json.id comment.author_id
#           json.full_name "#{comment.author.first_name} #{comment.author.last_name}"
#         end
#       end
#     end
#   end
# end

json.extract! user, :id, :first_name, :last_name, :birthday, :gender
json.posts do
  user.timeline_posts_with_comments.each do |post|
    json.set! 
      json.extract! post, :id, :profile_id, :content, :created_at
      json.author do
        json.id post.author_id
        json.full_name "#{post.author.first_name} #{post.author.last_name}"
      end
    end
    json.comments do
      post.comments_with_author.each do |comment|
        json.extract! comment, :id, :post_id, :content, :created_at
        json.author do
          json.id comment.author_id
          json.full_name "#{comment.author.first_name} #{comment.author.last_name}"
        end
      end
    end
  end
end
