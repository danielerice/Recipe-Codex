class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username

  has_many :recipes
  has_many :recipe_books, through: :recipes
end
