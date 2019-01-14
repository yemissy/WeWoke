class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.bigint :number
      t.string :organizationName
      t.string :password_digest

      t.timestamps
    end
  end
end
