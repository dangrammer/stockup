class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :username, email, balance
  has_many :stocks
end
