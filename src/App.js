import Home from './component/Home/Home';
import './App.css';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="">
      <Header></Header>
      <Home></Home>
     
    </div>
  );
}

export default App;
