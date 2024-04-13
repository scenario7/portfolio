import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import AnimatedCursor from 'react-animated-cursor';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <div className="">
      <AnimatedCursor 
        className="hidden lg:block"
        innerSize={8}
        outerSize={8}
        color='256, 256, 256'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={8}
        trailingSpeed={8}
      />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/blog' element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
