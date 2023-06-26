class User < ApplicationRecord
    has_many :recipes
    has_many :recipe_books, through: :recipes
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :name, presence: true
end
