class Step < ApplicationRecord
  belongs_to(
    :todo, 
    class_name: 'Todo',
    foreign_key: :todoId,
    primary_key: :id
  )

  validates :title, :body, :todoId, presence: true
  validates :done, inclusion: { in: [true, false] }
end