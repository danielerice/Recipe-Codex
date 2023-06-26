class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :directions, :ingredients, :category

  # has_many :users, through: :recipe_books
  # has_many :recipe_books, through: :recipe_books_recipes

end
