user = locals[:user]
timeline_posts = locals[:timeline_posts]
newsfeed_posts = locals[:newsfeed_posts]

json.photos({})
json.photos do
  user.photos.each do |photo|
    json.set! photo.id do
      json.id(photo.id)
      json.url(asset_path(photo.image.url(:profile_picture)))
    end
  end
end

json.profilePicture(asset_path(user.profile_picture.image.url(:profile_picture)))
json.extract! user, :id, :first_name, :last_name, :gender
json.birthday user.birthday.strftime('%b %d, %Y')

json.bannerPicture(asset_path(user.banner_picture.image.url(:banner)))

json.users([])

json.currentSection(0)

json.chatBoxes({})

json.friends({})
json.friends do
  user.friends.each do |friend|
    json.set! friend.id do
      json.profilePicture(asset_path(friend.profile_picture.image.url(:profile_picture)))
      json.extract! friend, :id, :first_name, :last_name, :gender
      json.birthday friend.birthday.strftime('%b %d, %Y')
    end
  end
end

json.conversations({})
json.conversations do
  user.conversations.each do |conversation|
    json.set! conversation.id do
      json.extract! conversation, :id

      json.users({})
      json.users do
        conversation.users.each do |user|
          json.set! user.id do
            json.profilePicture(asset_path(user.profile_picture.image.url(:profile_picture)))
            json.extract! user, :id, :first_name, :last_name, :gender
            json.birthday user.birthday.strftime('%b %d, %Y')
          end
        end
      end

      json.messages({})
      json.messages do
        conversation.messages.each do |message|
          json.set! message.id do
            json.extract! message, :id, :created_at, :content, :conversation_id

            json.user({})
            json.user do
              json.profilePicture(asset_path(message.user.profile_picture.image.url(:profile_picture)))
              json.extract! message.user, :id, :first_name, :last_name, :gender
              json.birthday message.user.birthday.strftime('%b %d, %Y')
            end
          end
        end
      end
    end
  end
end

json.timelinePosts({})
json.timelinePosts do
  timeline_posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :content
      json.time_ago "#{time_ago_in_words(post.created_at)} ago"

      json.author do
        json.profilePicture(asset_path(post.author.profile_picture.image.url(:profile_picture)))
        json.full_name "#{post.author.first_name} #{post.author.last_name}"
        json.id post.author.id
      end

      json.user do
        json.full_name "#{post.user.first_name} #{post.user.last_name}"
        json.id post.user.id
      end

      json.comments({})
      json.comments do
        post.comments.each do |comment|
          json.set! comment.id do
            json.extract! comment, :content, :id, :post_id
            json.time_ago "#{time_ago_in_words(comment.created_at)} ago"
            json.author do
              json.profilePicture(asset_path(comment.author.profile_picture.image.url(:profile_picture)))
              json.full_name "#{comment.author.first_name} #{comment.author.last_name}"
              json.id comment.author.id
            end
          end
        end
      end

      json.likes({})
      json.likes do
        post.likes.each do |like|
          json.set! like.id do
            json.id like.id
            json.likeable do
              json.id like.likeable_id
              json.type like.likeable_type
            end
            json.liker do
              json.id like.liker.id
              json.full_name "#{like.liker.first_name} #{like.liker.last_name}"
            end
          end
        end
      end
    end
  end
end

json.receivedRequests({})
json.receivedRequests do
  user.friend_requests.each do |request|
    next if request.approved
    json.set! request.id do
      json.id request.id

      json.requester do
        json.profilePicture(asset_path(request.user.profile_picture.image.url(:profile_picture)))
        json.full_name "#{request.user.first_name} #{request.user.last_name}"
        json.id request.user.id
      end

      json.requested do
        json.full_name "#{request.friend.first_name} #{request.friend.last_name}"
        json.id request.friend.id
      end
    end
  end
end

json.sentRequests({})
json.sentRequests do
  user.requested_friends.each do |request|
    json.set! request.id do
      json.id request.id

      json.requester do
        json.full_name "#{request.user.first_name} #{request.user.last_name}"
        json.id request.user.id
      end

      json.requested do
        json.full_name "#{request.friend.first_name} #{request.friend.last_name}"
        json.id request.friend.id
      end
    end
  end
end

json.newsfeedPosts({})
json.newsfeedPosts do
  newsfeed_posts.each do |post|
    json.set! post.id do
      json.extract! post, :id, :content
      json.time_ago "#{time_ago_in_words(post.created_at)} ago"

      json.author do
        json.profilePicture(asset_path(post.author.profile_picture.image.url(:profile_picture)))
        json.full_name "#{post.author.first_name} #{post.author.last_name}"
        json.id post.author.id
      end

      json.user do
        json.full_name "#{post.user.first_name} #{post.user.last_name}"
        json.id post.user.id
      end

      json.comments({})
      json.comments do
        post.comments.each do |comment|
          json.set! comment.id do
            json.extract! comment, :content, :id, :post_id
            json.time_ago "#{time_ago_in_words(comment.created_at)} ago"
            json.author do
              json.profilePicture(asset_path(comment.author.profile_picture.image.url(:profile_picture)))
              json.full_name "#{comment.author.first_name} #{comment.author.last_name}"
              json.id comment.author.id
            end
          end
        end
      end

      json.likes({})
      json.likes do
        post.likes.each do |like|
          json.set! like.id do
            json.id like.id
            json.likeable do
              json.id like.likeable_id
              json.type like.likeable_type
            end
            json.liker do
              json.id like.liker.id
              json.full_name "#{like.liker.first_name} #{like.liker.last_name}"
            end
          end
        end
      end
    end
  end
end
