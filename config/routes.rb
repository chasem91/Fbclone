Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :profiles, only: [:show, :create, :destroy]
    resources :posts, only: [:index, :create]
    resources :comments, only: [:create, :destroy]
    resource :user, only: [:index, :show, :create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

  root "static_pages#root"
end
