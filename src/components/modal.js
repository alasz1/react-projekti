import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {

    toggleModal = (e) => {
        document.getElementById("modal").classList.toggle('show');
    }

    render() {
        return (
            <div className="modal-overlay">
                <div className="modal">
                    <span className="close" onClick="this.toggleModal">&#10005;</span>
                </div>
            </div>
        );
    }
}

export default Modal;