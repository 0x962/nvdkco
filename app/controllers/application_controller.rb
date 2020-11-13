class ApplicationController < ActionController::Base
    before_action :set_gradient

    def set_gradient
        @gradient = GRADIENTS.sample
    end

end
