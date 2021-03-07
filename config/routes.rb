Rails.application.routes.draw do
  root "contents#index"
  resources :contents, only: [:index, :new, :create]
  
end