class User < ApplicationRecord
  has_secure_password
  has_many :stocks, dependent: :destroy
  has_many :transactions, dependent: :destroy

  validates :username, :email, presence: true
  validates :username, :email, uniqueness: {message: ': An account associated with %{value} already exists'}
  validates :email, format: {with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i}
  validates :username, length: {in: 2..20}
  validates :password, length: {minimum: 8}, on: :create

  def stockList
    self.stocks
  end

  def records
    self.transactions
  end

end
