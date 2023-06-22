class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :directions, :ingredients, :category, :poster_id

  has_many :users
  has_many :recipe_books
end
