class Recipe < ApplicationRecord
    belongs_to :user
    belongs_to :recipe_book

    validates :name, presence: true
    validates :ingredients, presence: true
    validates :directions, presence: true
    validates :category, presence: true
end
