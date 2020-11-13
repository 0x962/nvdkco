Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :pages do 
    collection do 
        get :home
    end
  end

  root to: 'pages#home'
end
