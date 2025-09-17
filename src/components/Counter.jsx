import React, { useState } from 'react'

const Counter = () => {
  // logic
  // let count = 0;
  // state
  const [count, setCount] = useState(0)
  const MAX = 10
  const MIN = 0

  const handleIncrease = () => {
    if (count >= MAX) return // count가 MAX보다 크거나 같으면 아래 setCount 실행X
    setCount(count + 1)
  }

  const handleDecrease = () => {
    setCount((prev) => count <= MIN ? count : prev - 1) // 삼항 연산자를 활용하여 count가 MIN보다 작거나 같으면 기존값으로, 크면 저장된 데이터에 -1씩 계산
  }

  // view
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div>
        <button type='button' onClick={handleIncrease}>+1</button>
        <button type='button' onClick={handleDecrease}>-1</button>
      </div>
    </div>
  )
}

export default Counter