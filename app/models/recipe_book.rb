class RecipeBook < ApplicationRecord
    belongs_to :user

    validates :name, presence: true
    validates :description, presence: true
    validates :description, length: {maximum: 500}
end
