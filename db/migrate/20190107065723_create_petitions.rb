class CreatePetitions < ActiveRecord::Migration[5.2]
  def change
    create_table :petitions do |t|
      t.string :title
      t.string :category
      t.text :detail
      t.string :Organizers_Name
      t.text :summary
      t.bigint :signatureCount
      t.integer :author_id, index: true

      t.timestamps
    end
  end
end
