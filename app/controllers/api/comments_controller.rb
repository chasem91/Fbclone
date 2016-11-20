require 'byebug'

class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.where("post_id = ?", params[:post_id]).includes(:author)
    render "api/comments/index"
  end

  def show
    @comment = Comment.find(params[:id])
    render "api/comments/show"
  end

	def create
		@comment = Comment.new(comment_params)
		if @comment.save
			render "api/comments/show"
		else
			render json: @comment.errors.full_messages, status: 422
		end
	end

	private

	def comment_params
		params.require(:comment).permit(:content, :author_id, :post_id)
	end
end
