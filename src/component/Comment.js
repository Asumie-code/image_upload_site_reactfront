import React from 'react';



class Comment extends React.Component {
    constructor() {
        super();
        this.state = {
            comment: ''
        }
    }


    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSumbit = (e) => {
        e.preventDefault();
    }



    render() {
        return (
            <form onSubmit={this.handleSumbit} className=' bg-dark mt-2'>
                <div className='row p-2 '>
                    <div className='col-10'>
                        <div className="form-group mb-0">
                            <input placeholder='Comment....' onChange={this.handleChange} name='comment' className="form-control" id="comment" type='text' value={this.state.value} required></input>
                        </div>
                    </div>
                    <div className='col-2'>
                        <button type="submit" className="btn btn-primary w-100">Post</button>

                    </div>
                </div>

            </form >
        );
    }
}


export default Comment;