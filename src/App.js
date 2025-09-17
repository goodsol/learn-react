import Greeting from './components/Greeting';
import Card from './components/Card';
import Counter from './components/Counter';

function App() {
  // logic
  const handleIncrease = () => {
    console.log("💥더하기 버튼 클릭!!")
  }
  // view
  return (
    <div className="App">
      조은솔
      <Greeting username="조은솔" />
      <Greeting username="남수민" />
      <Greeting username={"김보라"} />
      <Greeting username={"박인영"} />
      <Greeting username={"전예린"} />
      <Card />
      <Counter onIncreaseClick={handleIncrease}/>
      <Counter step={5} onIncreaseClick={handleIncrease} />
    </div>
  );
}

export default App;
