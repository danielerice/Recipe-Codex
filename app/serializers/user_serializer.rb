class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest

  has_many :recipe_books
  has_many :users, through: :recipe_books
end
