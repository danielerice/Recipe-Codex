class RecipeBook < ApplicationRecord
    has_many :recipes
    has_many :users, through: :recipes

    validates :name, presence: true
    validates :description, presence: true
    validates :description, length: {maximum: 500}
end
