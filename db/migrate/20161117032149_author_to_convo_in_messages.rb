class AuthorToConvoInMessages < ActiveRecord::Migration
  def change
    rename_column :messages, :author_id, :conversation_id
  end
end
