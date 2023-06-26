class RecipeBook < ApplicationRecord
    has_many :users, through: :recipes
    has_many :recipes

    validates :name, presence: true
    validates :description, presence: true
    validates :description, length: {maximum: 500}
end
