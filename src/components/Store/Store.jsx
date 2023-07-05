import React, { useState } from 'react';
import { ListView } from '../ListView/ListView';
import { CardsView } from '../CardsView/CardsView';
import { IconSwitch } from '../IconSwitch/IconSwitch';

export const Store = props => {
    const [icon, setIcon] = useState('view_list');

    return (
        <div>
            <IconSwitch
                icon={icon}
                onSwitch={() => icon === 'view_list' ? setIcon('view_module'): setIcon('view_list')}
            />
            {icon === 'view_list' ? <ListView items={ props.products } /> : <CardsView cards={ props.products } />}
        </div>
    )
}
