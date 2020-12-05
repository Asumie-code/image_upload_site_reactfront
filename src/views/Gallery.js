import React from 'react';
import Post from '../component/Post';
import Modal from '../component/Modal';
import Axios from 'axios';
import Addpost from '../component/Addpost';
import getUser from '../helpers/Getuser';







class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            posts: [],
            reload: false
        }
        
    }

    getPosts = () => {
        let url = 'http://localhost:5000/gallery';
        getUser(this, () => {
            Axios.get(url,  { params: this.state.user }).then(res => {
                this.setState({ posts: res.data });
            })   
        });
    }


    componentDidMount() {
        this.getPosts();
    }



     refreshPage = () => {
        this.getPosts();
    }

    render() {
        return (
            <div className="container-fluid " key={0}>
                <div className="card-group flex-column">
                    <Addpost  refresh={this.refreshPage} />

      
                    {this.state.posts.map((item, index) => {
                        return (
                            
                            <div key={index}>
                                <Post img={item.img} title={item.title} description={item.description} modalTarget={`#modal_${index}`} key={item.id} id={item.id} delay={index * 0.5} refresh={this.refreshPage}/>
                                <Modal img={item.img} modalId={`modal_${index}`} key={`modal_${item.id}`}/>
                            </div>

                        );
                    })}
                </div>
            </div>

        );
    }
}

export default Gallery;