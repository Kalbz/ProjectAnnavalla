import './App.css';
import Background from './components/Background';
import Header from './components/Header.js';
import './components/Header.css'
import Button from './components/Button.js';
import Circle from './components/Circle';

function App() {
  return (
    <div className="App" >
      <div className="background">
      <Header></Header>

      <Background>

<Button text="This is some text above the button" />

      </Background>
      </div>
      <Circle></Circle>
    </div>
  );
}

export default App;
