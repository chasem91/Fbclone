class CreateUserConversations < ActiveRecord::Migration
  def change
    create_table :user_conversations do |t|
      t.integer :user_id, null: false
      t.integer :conversation_id, null: false

      t.timestamps null: false
    end
  end
end
