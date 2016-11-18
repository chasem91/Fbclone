Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:index, :create, :show, :destroy]
    resources :comments, only: [:index, :create, :show, :destroy]
    resources :users, only: [:index, :show, :create, :destroy]
    resources :friend_requests, only: [:index, :create]
    resources :friendships, only: [:create]
    resources :likes, only: [:create, :show, :destroy]
    resources :photos, only: [:index, :show, :create, :destroy]
    resources :messages, only: [:create]
    resource :conversations, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
