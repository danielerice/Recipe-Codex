class Recipe < ApplicationRecord
    belongs_to :user
    belongs_to :recipe_book

    validates :name, presence: true
    validates :directions, presence: true
end
