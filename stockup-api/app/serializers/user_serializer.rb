class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :balance, :records, :stockList
  has_many :stocks
  has_many :transactions
end
