class Api::FriendshipsController < ApplicationController
  def create
    @friend_request = FriendRequest.find_by(
      user_id: params[:friend_id],
      friend_id: params[:user_id]
    )

    if @friend_request.update(approved: 'true')
      friendship = Friendship.new(
        user_id: params[:user_id],
        friend_id: params[:friend_id]
      )

      duplicate = Friendship.new(
        user_id: params[:friend_id],
        friend_id: params[:user_id]
      )
    end

    if friendship && friendship.save && duplicate.save
      convo = Conversation.create()
      user_convo = UserConversation.new(
        user_id: params[:user_id],
        conversation_id: convo.id
      )
      friend_convo = UserConversation.new(
        user_id: params[:friend_id],
        conversation_id: convo.id
      )
      if user_convo.save && friend_convo.save
        @conversation = Conversation.includes({ messages: [ :user ] }).find(convo.id)
        render 'api/friend_requests/show'
      elsif friendship
        render json: {
          errors: friendship.errors.full_messages,
          status: 422
        }
      else
        render json: {
          errors: ['friendship acceptance not proccessed'],
          status: 422
        }
      end
    end
  end
end
