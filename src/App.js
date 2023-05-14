import './App.css';
import Background from './components/Background';
import Header from './components/Header.js';
import './components/Header.css'
import Button from './components/Button.js';
import Circle from './components/Circle';
// import AirbnbImage from './components/AirbnbImage';
// import Image from './components/Image';
// import testImage from './Assets/Images/test.jpg';
import ImageGrid from './components/ImageGrid';

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
      <div class="backgroundImageGrid">
      <ImageGrid></ImageGrid>
      </div>
      {/* <AirbnbImage src={testImage} alt="Myimage test" text="This is some text below the image"></AirbnbImage>
      <AirbnbImage src={testImage} alt="Myimage test" text="This is some text below the image"></AirbnbImage> */}
    </div>
  );
}

export default App;
