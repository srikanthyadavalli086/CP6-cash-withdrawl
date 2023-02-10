import './index.css'

const DenominationItem = props => {
  //   const denominationDetails = props
  const {value, uniqueKey, decreaseAmount} = props

  const onDenomination = () => {
    decreaseAmount(uniqueKey)
  }

  return (
    <li>
      <button onClick={onDenomination} type="button" className="button">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
