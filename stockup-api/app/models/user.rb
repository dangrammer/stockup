class User < ApplicationRecord
  has_secure_password
  has_many :stocks, dependent: :destroy
  has_many :transactions, dependent: :destroy

  validates :username, :password, :email, presence: true
  validates :username, :email, uniqueness: true
  validates :email, format: {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i}
  validates :username, length: {in: 2..20}
  validates :password, length: {minimum: 8}
end
