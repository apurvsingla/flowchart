import React from 'react';
import Switch from 'react-switch';
import './SwitchButton.scss';

export default function SwitchButton(props) {
    return (
        <Switch type="checkbox" 
        checkedIcon={
            <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 10,
          color: "white",
          paddingLeft: 12,
        }}
      >
        Output
      </div>
        } 
        uncheckedIcon={
            <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 10,
          color: "white",
          paddingRight: 10,
        }}
      >
        Input
      </div>
        } 
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
