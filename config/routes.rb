Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'messages_random', to: 'messages#messages_random'
      resources :messages
    end
  end
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'static#index'
end
