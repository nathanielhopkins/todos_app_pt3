class Step < ApplicationRecord
  belongs_to(
    :todo, 
    class_name: 'Todo',
    foreign_key: :todoID,
    primary_key: :id
  )

  validates :title, :body, :todoID, presence: true
  validates :done, inclusion: { in: [true, false] }
end