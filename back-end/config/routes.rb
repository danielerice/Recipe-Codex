Rails.application.routes.draw do
  
  resources :recipe_books_recipes
  resources :recipes
  resources :recipe_books
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  post '/login', to: 'session#create'
  delete '/logout', to: 'session#destroy'

  get '/user_recipes/:n', to: 'users#user_recipes'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
