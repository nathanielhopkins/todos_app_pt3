class Tagging < ApplicationRecord
  validates :tag_id, :todo_id, presence: true
end