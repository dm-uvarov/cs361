Rails.application.routes.draw do
  resources :colours, only: [:create, :update, :destroy, :index, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  # root  "colours#index"




end
