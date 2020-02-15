class TransactionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :symbol, :shares, :price
  belongs_to :user
end
