class FriendSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :profile_picture, :birthdate, :phone_number, :email
  has_one :user
end
