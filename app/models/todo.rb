class Todo < ApplicationRecord
  has_many(
    :steps,
    class_name: "Step",
    foreign_key: :todoID,
    primary_key: :id
  )
  validates :title, :body, presence: true
  validates :done, inclusion: { in: [true, false] }
end