Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:index, :create, :show, :destroy]
    resources :comments, only: [:index, :create, :show, :destroy]
    resources :users, only: [:index, :show, :create, :destroy]
    resources :friend_requests, only: [:index]
    resources :friendships, only: [:create]
    resources :photos, only: [:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
