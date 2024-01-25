import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AnimatedCursor from 'react-animated-cursor';

function App() {
  return (
    <div className="">
      <AnimatedCursor 
        innerSize={8}
        outerSize={8}
        color='256, 256, 256'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={8}
        trailingSpeed={8}
      />
      <HomePage/>
    </div>
  );
}

export default App;
