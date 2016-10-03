class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.integer :user_id, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.date :birthday
      t.string :gender

      t.timestamps null: false
    end
  end
end
