import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  console.log("Image URL:", props.image); 
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image}  alt={props.name} style={{ width: "100%", height: "auto" }} /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
        ₹{props.new_price}
        </div>
        <div className="item-price-old">
        ₹{props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Item