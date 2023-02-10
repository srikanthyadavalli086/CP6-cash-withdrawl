import DenominationItem from '../DenominationItem'

import './index.css'

const CashWithdrawal = props => {
  const {denominationsList} = props
  let amount = 2000

  const decreaseAmount = uniqueKey => {
    const decreasedSum = denominationsList.filter(each => each.id === uniqueKey)
    const X = decreasedSum[0].value
    console.log(X)
    amount -= X
  }

  return (
    <div className="bg-container">
      <div className="container">
        <div className="first-container">
          <div className="profile-picture-bg">
            <p>S</p>
          </div>

          <p className="sarah-williams">Sarah Williams</p>
        </div>
        <div className="second-container">
          <p className="your-balance">Your Balance</p>
          <div>
            <h2 className="amount">{amount}</h2>
            <p className="in-rupees">In Rupees</p>
          </div>
        </div>
        <h1 className="withdraw">Withdraw</h1>
        <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
        <ul className="ul-container">
          {denominationsList.map(eachDenomination => (
            <DenominationItem
              uniqueKey={eachDenomination.id}
              value={eachDenomination.value}
              decreaseAmount={decreaseAmount}
              key={eachDenomination.id}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CashWithdrawal
