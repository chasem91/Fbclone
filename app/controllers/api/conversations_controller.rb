require 'byebug'

class Api::ConversationsController < ApplicationController
  def show
    @conversation = Conversation.find_by()
  end

  private
  def conversation_params
    params.require(:conversation).permit(:id)
  end
end
