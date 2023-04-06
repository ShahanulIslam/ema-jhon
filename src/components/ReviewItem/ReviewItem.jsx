import React from 'react';
import "./ReviewItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product ,handleRemoveToCart}) => {
    const { id, img, quantity, name, price } = product
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-info'>
                <p className='review-title'>{name}</p>
                <p>Price : <span className='orange-text'>${price}</span></p>
                <p>Order Quantity :<span className='orange-text'>{quantity}</span> </p>
            </div>
            <button className='btn-delete'>
                <FontAwesomeIcon onClick={()=>handleRemoveToCart(id)} className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;