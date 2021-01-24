class Post < ApplicationRecord

    enum status: {
        draft: 0,
        published: 90
    }

    def title
        slug.titleize
    end

end
