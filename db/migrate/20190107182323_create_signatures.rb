class CreateSignatures < ActiveRecord::Migration[5.2]
  def change
    create_table :signatures do |t|
      t.text :signature
      t.references :petition
      t.references :member

      t.timestamps
    end
  end
end
