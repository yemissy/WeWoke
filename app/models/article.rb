class Article < ApplicationRecord
  include HTTParty
  # has_many :members
  validates :title,  presence: true
  validates :story, presence: true
  validates :source, presence: true
end
