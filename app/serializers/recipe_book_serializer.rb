class RecipeBookSerializer < ActiveModel::Serializer
   attributes :id, :name, :description

   has_many :recipes
end
