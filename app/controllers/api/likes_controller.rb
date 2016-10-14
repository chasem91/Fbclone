require 'byebug'

class Api::LikesController < ApplicationController
  def create
    @like = Like.new(like_params)
    if @like.save
      @like = Like.includes(:liker).where("id = ?", @like.id).first
      render 'api/likes/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def show

  end

  def destroy

  end

  private
  def like_params
    params.require(:like).permit(:liker_id, :likeable_id, :likeable_type)
  end
end
