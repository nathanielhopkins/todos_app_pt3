class Todo < ApplicationRecord
  has_many :steps
  has_many :taggings
  has_many :tags, through: :taggings, source: :tag

  validates :title, :body, presence: true
  validates :done, inclusion: { in: [true, false] }

  def tag_names=(tag_names)
    self.tags = tag_names.map do |tag_name|
      Tag.find_or_create_by(name: tag_name)
    end
  end
end