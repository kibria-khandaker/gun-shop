import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';

// react Modal start-1
import Modal from 'react-modal';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
// react Modal end-1

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  // console.log(cart);

// react Modal start-2
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
// react Modal end-2

  const handleAddToCart = (gunInfoByBtn) =>{
    const newCart = [...cart,gunInfoByBtn]
    setCart(newCart);
    console.log(newCart);
    // console.log(gunInfoByBtn);
  }

  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
    .then(res=>res.json())
    .then(data=>setGuns(data))
  },[]);

  return (
    <div>
      <Navbar cart={cart} openModal={openModal} />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}><h1>X</h1></button>
        <h1>My Modal</h1>  

        <div>
        {
          cart.map(item=><p key={item.id} >{item.name}</p>)
        }
      </div>


      </Modal>

      <div className='productCard_container'>
        {
          guns.map((gun)=>(
              <ProductCard  key={gun.id} gunData={gun} handleAddToCart={handleAddToCart} />
          ))
        }
      </div>

    </div>
  );
}

export default App;
