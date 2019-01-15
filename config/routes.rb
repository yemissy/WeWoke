Rails.application.routes.draw do
    post 'member_token' => 'member_token#create'
    resources :signatures
    resources :articles
    resources :petitions do
      collection do
        get 'mypetitions'
      end
    end
    resources :members

    get 'new', to: 'articles#new', as: 'new'
    # get 'new', to: 'petitions#mypetitions', as: 'mypetitions'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
