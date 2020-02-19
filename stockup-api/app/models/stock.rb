class Stock < ApplicationRecord
  belongs_to :user

  validates :symbol, :shares, :user_id, presence: true
  validates :shares, :user_id, numericality: {only_integer: true}
end
