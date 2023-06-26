class RecipeBookSerializer < ActiveModel::Serializer
  # attributes :id, :name, :description, :user_id, :recipe_id

  # has_many :recipes, through: :recipe_books_recipes
  # belongs_to :user
end
