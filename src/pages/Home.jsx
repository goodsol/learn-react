import React from 'react'
import Logical from './../components/Logical';
import Greeting from './../components/Greeting';
import Card from './../components/Card';
import Counter from './../components/Counter';
import Move from '../components/Move';

const Home = () => {
  const alertIncrease = () => {
    console.log("💥더하기 버튼 클릭!!")
  }
  return (
    <div>Home
      {/* 페이지 이동 버튼 */}
      <Move /> 

      <Logical />
      <Greeting username="조은솔" />
      <Greeting username="남수민" />
      <Greeting username={"김보라"} />
      <Greeting username={"박인영"} />
      <Greeting username={"전예린"} />
      <Card />
      <Counter onIncreaseClick={alertIncrease}/> {/* 함수를 이용하여 자식 → 부모 */}
      <Counter step={5} onIncreaseClick={alertIncrease} /> {/* Props(값을 부모 → 자식) */}
    </div>
  )
}

export default Home