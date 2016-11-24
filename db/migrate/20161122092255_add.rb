class Add < ActiveRecord::Migration
  def change
    add_column :users, :profile_picture_id, :integer
    add_column :photos, :user_id, :integer
  end
end
