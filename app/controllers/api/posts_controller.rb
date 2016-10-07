require 'byebug'

class Api::PostsController < ApplicationController

  def index
    @posts = Post.all
    render "api/posts/index"
  end

  def show
    @post = Post.find(params[:id])
    render "api/posts/show"
  end

	def create
		@post = Post.new(post_params)
		if @post.save
			render "api/posts/show"
		else
			render json: @post.errors.full_messages, status: 422
		end
	end

	private

	def post_params
		params.require(:post).permit(:content, :author_id, :post_id)
	end
end
