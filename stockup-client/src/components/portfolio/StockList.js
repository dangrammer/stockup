import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Stock from './Stock'
import {setTotalEarnings} from '../../actions/stockActions'
import {currencyFormatter} from '../../actions/currencyFormatter'


const StockList = () => {
  const dispatch = useDispatch()
  const stocks = useSelector(state => state.stockReducer.stocks)
  const prices = useSelector(state => state.stockReducer.prices)
  const totalEarnings = useSelector(state => state.stockReducer.totalEarnings)
  const errors = useSelector(state => state.stockReducer.errors)

  useEffect(() => dispatch(setTotalEarnings(stocks, prices)), [dispatch, stocks, prices])

  stocks.sort((a, b) => a.symbol.localeCompare(b.symbol))

  return (
    <div>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      {/* TOTAL EARNINGS: USD {totalEarnings !== null ? currencyFormatter(totalEarnings) : 'calculating...'} */}
      TOTAL EARNINGS: USD {totalEarnings !== null || totalEarnings === 0 ? currencyFormatter(totalEarnings) : 'calculating...'}
      <br/>
      {stocks.length > 0 ?
          <ul>
            {stocks.map(stock => 
              <Stock 
                key={stock.id} 
                symbol={stock.symbol}
                shares={stock.shares}
                prices={prices.find(p => p.symbol === stock.symbol)}
              />
            )}
          </ul> :
            <span>No Stocks In Your Portfolio</span>
        }
    </div>
  )
}

export default StockList
