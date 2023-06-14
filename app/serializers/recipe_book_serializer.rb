class RecipeBookSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :user_id, :recipe_id
end
