class Member < ApplicationRecord
  # Member can create many petitions, hence they have many pertions
  # Member can sign many members petition, hence they also have many signed petitions though member??
  has_many :authored_petitions, class_name: 'Petition', foreign_key: "author_id"
  # has_many :signed_petitions, through: :signatures
  has_secure_password
  validates :firstName, presence: true
  validates :lastName, presence: true
  validates :email, presence: true

  def to_token_payload
    {
      sub: id,
      email: email
    }
  end
end
