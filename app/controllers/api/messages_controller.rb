require 'pusher'
require 'byebug'

class Api::MessagesController < ApplicationController
  def create
    # debugger
    Pusher.trigger('test_channel', 'my_event', {:message => params[:message]})
  end
end
