class EditUsers < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :birthday, :date
    add_column :users, :gender, :string
  end
end

#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  first_name :string           not null
#  last_name  :string           not null
#  birthday   :date
#  gender     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
