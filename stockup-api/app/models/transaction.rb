class Transaction < ApplicationRecord
  belongs_to :user

  validates :symbol, :shares, :price, :user_id, presence: true
  validates :shares, :user_id, numericality: {only_integer: true}
  validates :price, numericality: true
end
