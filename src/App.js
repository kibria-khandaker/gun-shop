import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  const [guns, setGuns] = useState([]);
  // console.log(guns);

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res=>res.json())
    .then(data=>setGuns(data))
  },[]);
  

  return (
    <div>
      <Navbar/>
      <div className='productCard_container'>
        {
          guns.map((gun)=>(
              <ProductCard  key={gun.id} gunData={gun}  />
          ))
        }
      </div>
    </div>
  );
}

export default App;
