class CreateStep < ActiveRecord::Migration[5.2]
  def change
    create_table :steps do |t|
      t.string :title
      t.string :body
      t.integer :todoID
      t.boolean :done

      t.timestamps
    end
  end
end
