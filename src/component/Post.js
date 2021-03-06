import React from 'react';
import Axios from 'axios';
import getUser from '../helpers/Getuser';



class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      postTitle: '',
      postDescription: '',
      postImg: ''
    }
  }


  componentWillMount() {
    this.setState({
      id: this.props.id,
      postTitle: this.props.title,
      postDescription: this.props.description,
      postImg: this.props.img
    })
 
  }


  handleDelete = (e) => {
    e.preventDefault();
    let url = 'http://localhost:5000/gallery';
    getUser(this, () => {
      Axios.delete(url, { data: { id: this.state.id, user: this.state.user } }).then((res) => {
        this.props.refresh();
      });
    });
    
  }




  handleSumbit = (e) => {
    e.prevenDefault();

  }




  render() {
    return (
      <>
        <div className='row animate__animated animate__fadeInRightBig' style={{ animationDelay: `${this.props.delay}s` }}>
          <button type="button" className="text-left button_style " data-toggle="modal" data-target={this.props.modalTarget}>
            <div className="card card_style" style={{ width: 100 + '%' }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={this.state.postImg} className="card-img" alt="..."></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{this.state.postTitle}</h5>
                    <p className="card-text">{this.state.postDescription}</p>

                    <p className="card-text m"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <div className=' mt-1 text-right card_style p-1 w-100 '>
            <button type="button" className="  mx-3 btn btn-primary" data-toggle="modal" data-target="#editPost" >Edit</button>
            <button type="button" className=" mx-1 btn btn-danger" onClick={this.handleDelete} >Delete</button>
          </div>
        </div>
        <div className="modal  p-xl-5 trans_style" id='editPost'>
          <button type="button" className="btn btn-primary text-white  close my-2 p-2" data-dismiss="modal"
            aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <div className="card card_style " style={{ width: 100 + "%" }}>
            <div className="card-body">
              <form className='p-5 bg-dark' onSubmit={this.handleSumbit}>
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
}


export default Post;