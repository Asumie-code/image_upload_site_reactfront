import React, { useState } from 'react';
import { useAddPostMutation, selectUser } from '../features/api/apiSlice';
import { useSelector } from 'react-redux'; 
import $ from 'jquery';


function Addpost() {
    const [addPost] = useAddPostMutation(); 
    const user = useSelector(state => selectUser(state))
    // ToDo change to uncontrolled component
    const [formInputs, setFormInputs] = useState({
        img: '',
        title: '',
        description: 'something'
    });

    const handleFileChange = (e) => {
        let file = e.target.files[0];
        setFormInputs({
            ...formInputs,
            img: file
        });
    }

    const handleChange = (e) => {
        setFormInputs({
            ...formInputs,
            [e.target.name]: e.target.value
        });

    }

   const  handleSumbit = async (e) => {

        
        e.preventDefault();
        let form = e.target;
        let mdal = $('#addPost');
        let formData = new FormData();
        formData.append('img', formInputs.img);
        formData.append('title', formInputs.title);
        formData.append('description', formInputs.description);
        try{
        await addPost({initialPost : formData, user}).unwrap();
                form[0].value = '';
                form[1].value = '';
                form[2].value = '';
                mdal.modal('hide');
              
        } catch(err) {
            console.log(err)
        }

    }


    return (
        <>
            <button type="button" className="btn btn-primary p-3 my-3 animate__animated animate__fadeInRightBig" data-toggle="modal" data-target="#addPost">Add Post</button>
            <div className="modal  p-xl-5 trans_style" id='addPost'>
                <button type="button" className="btn btn-primary text-white  close my-2 p-2" data-dismiss="modal"
                    aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <div className="card card_style " style={{ width: 100 + "%" }}>
                    <div className="card-body">
                        <form onSubmit={handleSumbit} className='p-5 bg-dark'>
                            <div className="custom-file">
                                <input onChange={handleFileChange} name='img' type="file" className="custom-file-input" id="file" accept='image' required></input>
                                <label className="custom-file-label" htmlFor="file">Choose file</label>
                            </div>
                            <div className='form-group mt-2'>
                                <label htmlFor="ArtworkTitle">Title</label>
                                <input onChange={handleChange} name='title' type="text" className="form-control" placeholder="Artwork Title" id='artworkTitle' required></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea onChange={handleChange} name='description' className="form-control" id="description" rows="3" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>

                </div>

            </div>
        </>
    );

}









export default Addpost;