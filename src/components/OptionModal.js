import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={props.handleClosePopup}
            ariaHideApp={false}
        >
            <h3>Selected options</h3>
            {props.selectedOption && <p>{props.selectedOption}</p>}
            <button onClick={props.handleClosePopup}>Okey</button>
        </Modal>
);

export default OptionModal;