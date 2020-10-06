import React from 'react';
import Popup from 'reactjs-popup';
import './Popup.scss';

const PopupMenu = ({open, close, children, click, onActivation, onDeactivation}) => {
    return (
        <Popup open={open}
                closeOnDocumentClick={false} 
                onClose={close}>
                    <div className="modal">
                    <span className="close" 
                        onClick={click}>
                        &times;
                    </span>
                    <br/>
                    <span className="popChildren"> {children} </span>
                    <br/>
                    <button onClick={onActivation}>Yes</button>
                    <button onClick={onDeactivation}>No</button>
                    </div>
            </Popup>
    );
}

export default PopupMenu;
