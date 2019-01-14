Rails.application.routes.draw do
    post 'member_token' => 'member_token#create'
    resources :signatures
    resources :articles
    resources :petitions
    resources :members
    
    get 'new', to: 'articles#new', as: 'new'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
