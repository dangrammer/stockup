import React from 'react'
import {useSelector} from 'react-redux'
import Stock from './Stock'


const StockList = () => {
  const stocks = useSelector(state => state.stockReducer.stocks)
  const prices = useSelector(state => state.stockReducer.prices)
  const errors = useSelector(state => state.stockReducer.errors)

  // will work this out soon
  // console.log(stocks)
  // console.log(prices)

  // async function earnings() {
  //     let promise = new Promise((resolve) => {
  //       stocks.map(stock => {
  //         let priceObject = prices.find(p => p.symbol === stock.symbol)
  //         if (priceObject) resolve(stock.shares * parseFloat(priceObject.price)) 
  //       })
  //     })
  //     let earnings = await promise
    
  //     console.log(earnings)
  //   }
    
  //   earnings()
  

  stocks.sort((a, b) => a.symbol.localeCompare(b.symbol))

  return (
    <div>
      <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      Stocklist (TOTAL EARNING$)
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