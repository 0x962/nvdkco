class PostsController < ApplicationController
    before_action :set_post
    before_action :increment_view_count

    def show
        render "posts/#{@post.slug}"
    end

    private

    def set_post
        @post = Post.where(slug: params[:id]).first

        unless @post.present?
            head :not_found and return
        end
    end

    def increment_view_count
        return unless @post.present?

        @post.view_count = (@post.view_count || 0) + 1
        @post.save
    end

end