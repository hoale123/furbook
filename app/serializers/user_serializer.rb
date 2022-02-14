class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :profile_picture, :bio,:birthdate,:phone_number,:email
  has_many :posts
  has_many :comments
  has_many :friends
end
