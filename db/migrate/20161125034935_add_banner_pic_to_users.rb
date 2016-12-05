class AddBannerPicToUsers < ActiveRecord::Migration
  def change
    add_column :users, :banner_picture_id, :integer
  end
end
