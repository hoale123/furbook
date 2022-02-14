class User < ApplicationRecord
    has_many :posts, dependent: :destroy
    has_many :comments, dependent: :destroy
    has_many :friends
    has_secure_password


    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, length: { minimum: 6, maximum:15 }
    validates :bio, length: { maximum: 500 }
end
