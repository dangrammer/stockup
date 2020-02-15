class StockSerializer
  include FastJsonapi::ObjectSerializer
  attributes :symbol, :shares
  belongs_to :user
end
