class UsersController < ApplicationController
  skip_before_action :authorized, only: :create

  def profile
    render json: {user: UserSerializer.new(current_user)}, status: :accepted
  end

  def create
    user = User.create(user_params)
    if user.valid?
      token = encode_token({user_id: user.id})
      render json: {user: UserSerializer.new(user), token: token}, status: :created
    else
      render json: {errors: user.errors.full_messages}, status: :not_acceptable
    end
  end

  def update
    user = User.find(params[:id])
    user.update(balance: user_params[:balance])
    if user.valid?
      render json: UserSerializer.new(user), status: :accepted
    else
      render json: {errors: user.errors.full_messages}, status: :not_acceptable
    end
  end

  private

  def user_params
    params.permit(:username, :email, :password, :balance)
  end

end
