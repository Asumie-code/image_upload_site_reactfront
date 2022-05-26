import React, { useState, useEffect } from 'react';
import Post from '../component/Post';
import Modal from '../component/Modal';
import Axios from 'axios';
import Addpost from '../component/Addpost';
import getUser from '../helpers/Getuser';




function Gallery() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = () => {
        let url = 'http://localhost:5000/gallery';
        getUser((user) => {
            Axios.get(url, { params: user }).then(res => {
                setPosts(res.data);
            })
        });
    }

    const refreshPage = () => {
        getPosts();
    }

    return (
        <div className="container-fluid " >
            <div className="card-group flex-column">
                <Addpost refresh={refreshPage} />


                {posts.map((item, index) => {
                    return (

                        <div key={index}>
                            <Post img={item.img} title={item.title} description={item.description} modalTarget={`#modal_${index}`} key={item.id} id={item.id} delay={index * 0.5} refresh={refreshPage} />
                            <Modal img={item.img} modalId={`modal_${index}`} key={`modal_${item.id}`} />
                        </div>

                    );
                })}
            </div>
        </div>

    );

}




export default Gallery;