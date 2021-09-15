class Todo < ApplicationRecord
  has_many(
    :steps,
    class_name: "Step",
    foreign_key: :todoId,
    primary_key: :id
  )

  has_many(
    :taggings,
    class_name: 'Tagging',
    foreign_key: :todo_id,
    primary_key: :id
  )

  has_many :tags, through: :taggings, source: :tag

  validates :title, :body, presence: true
  validates :done, inclusion: { in: [true, false] }

  def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
  end
end