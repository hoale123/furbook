class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body,:user_id, :post_id
  has_one :user
  has_one :post
end
