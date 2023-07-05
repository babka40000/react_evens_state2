import React from 'react'
import { ShopCard } from './ShopCard/ShopCard'
import './css/cardview.css'

export const CardsView = props => {
    return (
        <div className='cards-view-main'>
            {props.cards.map((card) => (<ShopCard card={card} />))}
        </div>
    )
}
