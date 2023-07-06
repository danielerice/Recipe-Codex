class RecipeSerializer < ActiveModel::Serializer
   attributes :id, :name, :directions, :ingredients #, :category, user_id, recipe_book_id

  belongs_to :user
  belongs_to :recipe_book

end
