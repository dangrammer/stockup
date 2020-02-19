class TransactionSerializer
  include FastJsonapi::ObjectSerializer
  attributes :symbol, :shares, :price #, :purchase_date see note in transaction.rb
  belongs_to :user
end
