class StaticPagesController < ApplicationController
  def root
    if current_user
  		@user = User.includes(
  		:friends,
  		{ friend_requests: [:user, :friend] },
  		{ requested_friends: [:user, :friend] },
      { conversations: [ { messages: [ :user ] }, :users ] }
  		).find(current_user.id)

  		friend_ids = @user.friends.map { |friend| friend.id }
      friend_ids << @user.id

  		@newsfeed_posts = Post
  		.includes(:author, :user, { comments: [ { likes: [:liker] }, :author ] }, { likes: [:liker] } )
  		.where(author_id: friend_ids).reverse

  		@timeline_posts = Post
      .includes(:author, :user, { comments: [ { likes: [:liker] }, :author ] }, { likes: [:liker] } )
      .where(user_id: @user.id).reverse
    end
  end
end
