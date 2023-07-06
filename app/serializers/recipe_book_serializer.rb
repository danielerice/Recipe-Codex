class RecipeBookSerializer < ActiveModel::Serializer
   attributes :id, :name, :description

   has_many :recipes
   has_many :users, through: :recipes

end
