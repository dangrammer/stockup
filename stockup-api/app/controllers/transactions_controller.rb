class TransactionsController < ApplicationController

  def create
    transaction = Transaction.create(transaction_params)
    if transaction.valid?
      render json: {transaction: TransactionSerializer.new(transaction)}, status: :created
    else
      render json: {errors: transaction.errors.full_messages}, status: :not_acceptable
    end
  end

  private

  def transaction_params
    params.permit(:symbol, :shares, :price, :user_id)
  end

end
