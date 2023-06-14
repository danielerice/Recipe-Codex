class CreateRecipeBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :recipe_books do |t|
      t.string :name
      t.text :description
      t.integer :user_id
      t.integer :recipe_id

      t.timestamps
    end
  end
end
