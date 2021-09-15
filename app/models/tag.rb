class Tag < ApplicationRecord
  validates :name, presence: true

  has_many(
    :taggings,
    class_name: 'Tagging',
    foreign_key: :tag_id,
    primary_key: :id
  )

  has_many :todos, through: :taggings, source: :todo
end