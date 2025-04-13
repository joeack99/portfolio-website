import logo from './logo.svg';
import './App.css';
import './Components/style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePageComponent from './Components/HomePageComponent';
import AboutPageComponent from './Components/AboutPageComponent';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageComponent />}/>
        <Route path="/about" element={<AboutPageComponent />}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
