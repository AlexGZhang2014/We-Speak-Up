class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :author
  belongs_to :post
end
