Rails.application.routes.draw do
  root 'static#index'
  namespace :api do
    namespace :v1 do
      get "messages_random", to: "messages#messages_random"
      resources :messages
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
