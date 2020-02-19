import React from 'react'
import {useSelector} from 'react-redux'
import TransactionRecord from '../components/transactions/TransactionRecord'

const TransactionContainer = () => {
  const user = useSelector(state => state.currentUserReducer.currentUser)
  const records = user.attributes.records.sort((a, b) => a.created_at > b.created_at ? -1 : 1)

  const dateFormat = (date) => {
    const YMD = date.split('T')[0].split('-')
    const [y, m, d] = YMD
    return `${m}/${d}/${y}`
  }

  return (
    <>
      <h1>Transaction Record</h1>
      <div>
        {records.length > 0 ?
          <>
            {records.map(record => 
              <TransactionRecord 
                key={record.id} 
                symbol={record.symbol}
                shares={record.shares}
                price={record.price}
                date={dateFormat(record.created_at)}
              />
            )}
          </> :
            <span>No Transaction Records</span>
        }
      </div>
    </>
  )
}

export default TransactionContainer
