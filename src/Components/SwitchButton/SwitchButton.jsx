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
          paddingLeft: 16,
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
          paddingRight: 11,
          paddingBottom:5
        }}
      >
        Input
      </div>
        } 
        onColor='#f8c01d'
        offColor='#5095ce'
        height={16}
        width={62}
        handleDiameter={14}
        disabled={props.disabled}
        checked={props.checked}
        onChange={props.onChange}
        className="ls"
        />
    )
}
