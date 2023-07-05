import React from 'react'
import './css/iconswitch.css'

export const IconSwitch = props => {
    return (
        <div className='icon-switch-main'>
            <button className="material-icons" onClick={props.onSwitch}>{props.icon}</button>
        </div>
    )
}