Rails.application.routes.draw do
  resources :users
  resources :workouts, only: [:index, :show ,:create]

  get '/workouts/:id/summary', to: 'workouts#summary'
  get '/workout_summaries', to: 'workouts#summaries'

  post '/signup', to: 'users#create'
  post '/login', to: 'sessions#create'
  delete "/logout", to: "sessions#destroy"
  get '/me', to: 'users#show_current_user'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
