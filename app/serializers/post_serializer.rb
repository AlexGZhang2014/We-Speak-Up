class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :author
  has_many :comments
end
