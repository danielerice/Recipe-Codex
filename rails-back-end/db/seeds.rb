# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user = User.create({name: 'Daniel Rice', username: 'LineCookie',password: 'DanielIsCool'})
recipe_book = RecipeBook.create({name: 'Lark', description: 'Everything I know'})
recipe = Recipe.create({name: 'Ice Water', directions: 'put water in ice', ingredients: "lots of ice and water", category: "drinks", recipe_book_id: 1, user_id: 1})