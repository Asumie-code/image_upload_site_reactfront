 import Axios from 'axios';
 
 
 


export const getUser = (callback) => {
    const jwt = localStorage.getItem('jwt');
    let user = ''; 
    const userInfoUrl = 'http://localhost:5000/user';
    Axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    Axios.defaults.headers.common['Content-Type'] = `application/json`;
    Axios.get(userInfoUrl).then(res => {
        user = res.data; 
        callback(user);
    
    }).catch(e => {
        console.log(e)
    })
}


export default getUser;