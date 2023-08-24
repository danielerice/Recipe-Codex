class RecipeBookSerializer < ActiveModel::Serializer
   attributes :id, :name, :description, :recipes

   has_many :recipes
end
