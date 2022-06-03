import React from 'react';
import Post from '../component/Post';
import Modal from '../component/Modal';
import Addpost from '../component/Addpost';
import { useGetPostsQuery, selectUser } from '../features/api/apiSlice'
import { useSelector } from 'react-redux'; 




function Gallery() {
    const user = useSelector(state => selectUser(state))
    // todo first user passed is undefined causing a bad request error
    // two query are happing at the same time getPost, getUser
    console.log(user); 
    const {
        data: posts,
        isSuccess: postsSuccess
    } = useGetPostsQuery(user);



  
    let content;
    if (postsSuccess) {
        content = posts.map((item, index) => {
            return (

                <div key={index}>
                    <Post img={item.img} title={item.title} description={item.description} modalTarget={`#modal_${index}`} key={item.id} id={item.id} delay={index * 0.5}  />
                    <Modal img={item.img} modalId={`modal_${index}`} key={`modal_${item.id}`} />
                </div>

            );
        })
    }


    return (
        <div className="container-fluid " >
            <div className="card-group flex-column">
                <Addpost />

                {content}

            </div>
        </div>

    );

}




export default Gallery;