class PagesController < ApplicationController
    def home
        @latest_post = Post.order("created_at DESC").first
    end
end
