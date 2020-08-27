import React from 'react';
import Axios from 'axios';
import $ from 'jquery';



class Addpost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: '',
            title: '',
            description: ''
        }
    }


    handleFileChange = (e) => {
        let file = e.target.files[0];
        console.log(file)
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({
                img: e.target.result
            });
        }
        reader.readAsDataURL(file);
    }





    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
        
    }



    handleSumbit = (e) => {
        e.preventDefault();
        let url = 'http://localhost:5000/gallery';
        let form = e.target; 
        let mdal = $('#addPost');
        
        
        Axios.post(url, this.state).then((res) => {
            console.log(res);
            form[0].value = '';
            form[1].value = '';
            form[2].value = '';
            mdal.modal('hide');
        }).catch(e => {console.log(e)})
    }



    render() {
        return (
            // <button type="button" className=" btn btn-primary p-3 my-3">Add</button>
            <>
                <button type="button" className="btn btn-primary p-3 my-3 animate__animated animate__fadeInRightBig" data-toggle="modal" data-target="#addPost">Add Post</button>
                <div className="modal  p-xl-5 trans_style" id='addPost'>
                    <button type="button" className="btn btn-primary text-white  close my-2 p-2" data-dismiss="modal"
                        aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    <div className="card card_style " style={{ width: 100 + "%" }}>
                        <div className="card-body">
                            <form  onSubmit={this.handleSumbit} className='p-5 bg-dark'>
                                <div className="custom-file">
                                    <input onChange={this.handleFileChange} name='img' type="file" className="custom-file-input" id="file" accept='image' required></input>
                                    <label className="custom-file-label" htmlFor="file">Choose file</label>
                                </div>
                                <div className='form-group mt-2'>
                                    <label htmlFor="ArtworkTitle">Title</label>
                                    <input onChange={this.handleChange} name='title' type="text" className="form-control" placeholder="Artwork Title" id='artworkTitle' required></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea onChange={this.handleChange} name='description' className="form-control" id="description" rows="3" required></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>

                        </div>

                    </div>

                </div>
            </>
        );
    }
}



export default Addpost;