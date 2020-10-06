import React from 'react';
import Switch from 'react-switch';
import './SwitchButton.scss';

export default function SwitchButton(props) {
    return (
        <Switch type="checkbox" 
        checkedIcon={false} 
        uncheckedIcon={false} 
        onColor='#f8c01d'
        offColor='#5095ce'
        height={18}
        handleDiameter={16}
        disabled={props.disabled}
        checked={props.checked}
        onChange={props.onChange}
        className="ls"
        />
    )
}
