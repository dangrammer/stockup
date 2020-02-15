class User < ApplicationRecord
  has_secure_password
  has_many :stocks, :dependent_destroy
end
