import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';

function App() {
  const [guns, setGuns] = useState([]);
  console.log(guns);

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res=>res.json())
    .then(data=>setGuns(data))
  },[]);
  

  return (
    <div className="App">
      <Navbar></Navbar>
      <Products></Products>
    </div>
  );
}

export default App;
