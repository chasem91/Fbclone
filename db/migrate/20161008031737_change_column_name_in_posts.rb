class ChangeColumnNameInPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :profile_id, :integer
    add_column :posts, :user_id, :integer
  end
end
