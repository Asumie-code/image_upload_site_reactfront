import React from 'react';
import Likebtn from './Likebtn';
import Comment from './Comment';




function Modal(props) {
    return (
        <div className="modal  p-xl-5 trans_style" id={props.modalId}>
            <button type="button" className="btn btn-primary text-white  close my-2 p-2" data-dismiss="modal"
                aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <div className="card card_style " style={{ width: 100 + "%" }}>

                <img src={props.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's
              content.</p>
                <Likebtn />
                <Comment />
                </div>
            </div>
        </div>
    );
}






export default Modal;