class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, :email, :balance
  has_many :stocks
  has_many :transactions
end
