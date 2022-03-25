import React from 'react';
import './ProductCard.css'

const ProductCard = ({gunData}) => {
    const {name,img,bullet,capacity,action,price}=gunData;
    // console.log(props);
    console.log(gunData);
    return (
        <div className='productCard_items'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Bullet Type : {bullet}</p>
            <p>Capacity : <b>{capacity}</b></p>
            <p>Action : {action}</p>
            <div className='card_footer'>
                <h2>${price}</h2>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default ProductCard;


// "id": 1,
// "name": "GLOCK 17 Gen5",
// "img": "https://raw.githubusercontent.com/mir-hussain/guns/main/guns/glock.png",
// "bullet": "9mm",
// "capacity": "17 + 1",
// "action": "Semi-Automatic",
// "price": "540",