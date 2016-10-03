class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.integer :profile_id, null: false
      t.string :content, null: false

      t.timestamps null: false
    end
  end
end
