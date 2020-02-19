class Transaction < ApplicationRecord
  belongs_to :user

  validates :symbol, :shares, :price, :user_id, presence: true
  validates :shares, :user_id, numericality: {only_integer: true}
  validates :price, numericality: true

  # this is not travelling to :user transaction attribute or record method attribute, come back to it
  # def purchase_date
  #   self.created_at.strftime('%^b %-d %Y')
  # end

end
