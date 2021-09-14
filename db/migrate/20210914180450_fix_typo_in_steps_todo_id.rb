class FixTypoInStepsTodoId < ActiveRecord::Migration[5.2]
  def change
    remove_column :steps, :todoID
    add_column :steps, :todoId, :integer 
  end
end
