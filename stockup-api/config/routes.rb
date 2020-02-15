Rails.application.routes.draw do
  # limit resources to used paths
  resources :transactions
  resources :stocks
  resources :users
  post '/login', to: 'login#create'
  get '/profile', to: 'users#profile'
end
