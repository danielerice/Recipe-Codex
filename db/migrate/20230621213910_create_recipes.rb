class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :directions
      t.text :ingredients
      t.string :category
      t.integer :poster_id

      t.timestamps
    end
  end
end
