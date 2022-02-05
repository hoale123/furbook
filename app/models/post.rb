class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  validates :text, presence: true, length: { in: 1..300 }

end
