class Recipe < ApplicationRecord
    has_many :recipe_books
    has_many :users, through: :recipe_books

    validates :name, presence: true
    validates :ingredients, presence: true
    validates :directions, presence: true
    validates :category, presence: true
end
