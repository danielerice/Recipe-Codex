class User < ApplicationRecord
    has_many :recipe_books
    has_many :recipes, through: :recipe_books
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :name, presence: true
end
