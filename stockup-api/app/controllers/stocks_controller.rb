class StocksController < ApplicationController

  def create
    stock = Stock.create(stock_params)
    if stock.valid?
      render json: {stock: StockSerializer.new(stock)}, status: :created
    else
      render json: {errors: stock.errors.full_messages}, status: :not_acceptable
    end
  end

  def update
    stock = Stock.find(params[:id])
    newAmount = stock.shares + stock_params[:shares]
    stock.update(shares: newAmount)
    if stock.valid?
      render json: StockSerializer.new(stock), status: :accepted
    else
      render json: {errors: stock.errors.full_messages}, status: :not_acceptable
    end
  end

  private

  def stock_params
    params.permit(:symbol, :shares, :user_id)
  end

end
