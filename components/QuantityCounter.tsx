interface QuantityCounterProps {
  handleQuantityChange: (change: number) => void
  quantity: number
}

const QuantityCounter: React.FC<QuantityCounterProps> = ({
  handleQuantityChange,
  quantity,
}) => {
  return (
    <div className="flex items-center gap-4 w-fit">
      <button
        className={`flex items-center text-xl shadow px-4 py-1 ${
          quantity === 1 && 'text-gray-200 bg-gray-50 cursor-not-allowed'
        } rounded`}
        onClick={() => {
          handleQuantityChange(-1)
        }}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        className={`flex items-center text-xl px-4 py-1 shadow text-white bg-[#fca412]/20 hover:bg-[#fca412] rounded`}
        onClick={() => {
          handleQuantityChange(1)
        }}
      >
        +
      </button>
    </div>
  )
}

export default QuantityCounter
