import React, { useState } from 'react';



function Comment() {
    const [comment, setComment] = useState('');
    const handleChange = (e) => {
        e.preventDefault();
        setComment(e.target.value); 
    }


    const handleSumbit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSumbit} className=' bg-dark mt-2'>
            <div className='row p-2 '>
                <div className='col-10'>
                    <div className="form-group mb-0">
                        <input placeholder='Comment....' onChange={handleChange} name='comment' className="form-control" id="comment" type='text' value={comment} required></input>
                    </div>
                </div>
                <div className='col-2'>
                    <button type="submit" className="btn btn-primary w-100">Post</button>

                </div>
            </div>

        </form >
    );

}






export default Comment;