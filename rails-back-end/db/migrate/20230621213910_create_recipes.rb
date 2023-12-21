class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :directions
      t.text :ingredients
      t.string :category
      t.integer :user_id
      t.integer :recipe_book_id

      t.timestamps
    end
  end
end
