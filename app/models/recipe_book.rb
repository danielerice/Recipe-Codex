class RecipeBook < ApplicationRecord
    belongs_to :user
    has_many :recipes

    validates :name, presence: true
    validates :description, presence: true
    validates :description, length: {maximum: 500}
end
