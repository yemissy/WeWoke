class Signature < ApplicationRecord

  belongs_to :member
  belongs_to :petition
  validates :terms_of_service, acceptance: true
end
