Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:index, :create]
    resources :comments, only: [:create, :destroy]
    resources :users, only: [:index, :show, :create, :destroy]
    resources :photos, only: [:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
