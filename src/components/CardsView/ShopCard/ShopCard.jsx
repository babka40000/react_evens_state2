import React from 'react'
import './css/shopcard.css'

export const ShopCard = props => {
    return (
        <div className='shop-card-main'>
            <div className='shop-card-name'>{props.card.name}</div>
            <div className='shop-card-color'>{props.card.color}</div>
            <div><img className='shop-card-img' src={props.card.img} alt=''/></div>
            <div className='shop-card-row'>
                <div className='shop-card-price'>${props.card.price}</div>
                <button className='shop-card-button'>add to cart</button>
            </div>
        </div>
    )
}