import React from 'react';
import Post from '../component/Post';
import Modal from '../component/Modal';
import Axios from 'axios';
import Addpost from '../component/Addpost';



class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }




    componentDidMount() {
        let url = 'http://localhost:5000/gallery';
        Axios.get(url).then(res => {
            this.setState({ posts: res.data });

        })
    }

    render() {
        return (
            <div className="container-fluid ">
                <div className="card-group flex-column">
                    <Addpost />

      
                    {this.state.posts.map((item, index) => {
                        
                        return (
                            
                            <>
                                <Post img={item.img} title={item.title} description={item.description} modalTarget={`#modal_${item.id}`} key={`post_id_${item.id}`} delay={index * 0.5} />
                                <Modal img={item.img} modalId={`modal_${item.id}`} key={`modal_id_${item.id}`}/>
                            </>

                        );
                    })}
                </div>
            </div>

        );
    }
}

export default Gallery;