class StaticPagesController < ApplicationController
  def root
    if current_user
  		@user = User.include_everything.find(current_user.id)
  		friend_ids = @user.friends.map { |friend| friend.id }
      friend_ids << @user.id
      @newsfeed_posts = Post.include_everything.where(author_id: friend_ids).reverse
      @timeline_posts = Post.include_everything.where(user_id: @user.id).reverse
    end
  end
end
