class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body,:user_id, :post_id, :username
  belongs_to :user
  belongs_to :post
end
