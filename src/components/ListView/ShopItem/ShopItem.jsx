import React from 'react'
import './css/shopitem.css'

export const ShopItem = props => {
    return (
        <div className='shop-item-main'>
            <div className='shop-item-pic'><img alt='' src={props.item.img}/></div>
            <div className='shop-item-item'>{props.item.name}</div>
            <div className='shop-item-item'>{props.item.color}</div>
            <div className='shop-item-item'>{props.item.price}</div>
            <div className='shop-item-item'><button>ADD TO CART</button></div>
        </div>
    )
}
