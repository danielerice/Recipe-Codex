class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :recipes, :my_recipe_books

  has_many :recipes

end
