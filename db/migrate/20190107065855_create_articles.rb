class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :story
      t.string :writer
      t.string :source
      t.date :publishedDate
      t.integer :likes

      t.timestamps
    end
  end
end
