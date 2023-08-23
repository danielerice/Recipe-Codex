class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :recipes, :recipe_books

  has_many :recipes
  has_many :recipe_books
end
