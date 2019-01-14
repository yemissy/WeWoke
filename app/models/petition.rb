class Petition < ApplicationRecord
  # Member can sign many members petition, hence they also have many signed petitions though member??
  # belongs to the member who created it
  belongs_to :author, class_name: 'Member', foreign_key: 'author_id'
  # has_many :signatures
  # has many memebers who signed it
  validates :title,  presence: true
  validates :category, presence: true
  validates :detail, presence: true
end
