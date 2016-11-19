require 'pusher'
require 'byebug'

class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      Pusher.trigger(
        "#{params[:message][:conversation_id]}",
        'my_event',
        {message: JSON.parse((render "api/messages/show").first)}
      )
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private
  def message_params
    params.require(:message).permit(:user_id, :conversation_id, :content)
  end
end
