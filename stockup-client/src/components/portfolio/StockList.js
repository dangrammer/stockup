import React from 'react'
import {useSelector} from 'react-redux'
import Stock from './Stock'

const StockList = () => {
  const stocks = useSelector(state => state.stockReducer.stocks)

  stocks.sort((a, b) => a.symbol.localeCompare(b.symbol))

  return (
    <div>
      Stocklist (TOTAL EARNING$)
      {stocks.length > 0 ?
          <ul>
            {stocks.map(stock => 
              <Stock 
                key={stock.id} 
                symbol={stock.symbol}
                shares={stock.shares}
              />
            )}
          </ul> :
            <span>No Stocks In Your Portfolio</span>
        }
    </div>
  )
}

export default StockList