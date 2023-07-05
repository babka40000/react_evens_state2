import React from 'react'
import { ShopItem } from './ShopItem/ShopItem'

export const ListView = props => {
    return (
        <div>
            {props.items.map((item) => (<ShopItem item={item} />))}
        </div>
    )
}
