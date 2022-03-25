import React from 'react';
import './Navbar.css'
import {HiOutlineShoppingCart} from 'react-icons/hi';

const Navbar = (props) => {
    return (
        <div className='navbar'>
            <h1>NABBAR</h1>
            <button className='nabModalBtn' onClick={props.openModal}> 
                <HiOutlineShoppingCart/> 
                <span>{props.cart.length}</span> 
            </button>
        </div>
    );
};

export default Navbar;