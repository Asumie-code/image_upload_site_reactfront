import React, { useState, useEffect } from 'react';
import { useDeletePostMutation, selectUser } from '../features/api/apiSlice';
import { useSelector } from 'react-redux';





function Post(props) {
  const [postData, setPostData] = useState({
    id: '',
    postTitle: '',
    postDescription: '',
    postImg: ''
  })

  const user = useSelector(state => selectUser(state))
  const [deletePost,] = useDeletePostMutation();


  useEffect(() => {

    setPostData((prevPostData)=> ({
      ...prevPostData,
        id: props.id,
        postTitle: props.title,
        postDescription: props.description,
        postImg: props.img
      
    }))
  }, [props.id, props.title ,props.description ,props.img]);

  const handleSumbit = (e) => {
    e.prevenDefault();

  }

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deletePost({postData, user}).unwrap();
    } catch(err) {
      console.log(err); 
    }
    
  }



  return (
    <>
      <div className='row animate__animated animate__fadeInRightBig' style={{ animationDelay: `${props.delay}s` }}>
        <button type="button" className="text-left button_style " data-toggle="modal" data-target={props.modalTarget}>
          <div className="card card_style" style={{ width: 100 + '%' }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={postData.postImg} className="card-img" alt="..."></img>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{postData.postTitle}</h5>
                  <p className="card-text">{postData.postDescription}</p>

                  <p className="card-text m"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </button>
        <div className=' mt-1 text-right card_style p-1 w-100 '>
          <button type="button" className="  mx-3 btn btn-primary" data-toggle="modal" data-target="#editPost" >Edit</button>
          <button type="button" className=" mx-1 btn btn-danger" onClick={handleDelete} >Delete</button>
        </div>
      </div>
      <div className="modal  p-xl-5 trans_style" id='editPost'>
        <button type="button" className="btn btn-primary text-white  close my-2 p-2" data-dismiss="modal"
          aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <div className="card card_style " style={{ width: 100 + "%" }}>
          <div className="card-body">
            <form className='p-5 bg-dark' onSubmit={handleSumbit}>
              <div className="custom-file">
                <input name='file' type="file" className="custom-file-input" id="file" required></input>
                <label className="custom-file-label" htmlFor="file">Choose file</label>
              </div>
              <div className='form-group mt-2'>
                <label htmlFor="ArtworkTitle">Title</label>
                <input name='artwork_title' type="text" className="form-control" placeholder="Artwork Title" id='artworkTitle' required></input>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea name='description' className="form-control" id="description" rows="3" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>

          </div>

        </div>

      </div>
    </>
  );

}




export default Post;