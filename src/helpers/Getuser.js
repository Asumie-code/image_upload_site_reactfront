 import Axios from 'axios';
 
 
 
 const getUser = (context, callback) => {
    const jwt = localStorage.getItem('jwt');
    const userInfoUrl = 'http://localhost:5000/user';
    Axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
    Axios.defaults.headers.common['Content-Type'] = `application/json`;
    Axios.get(userInfoUrl).then(res => {
        context.setState({
            user: res.data
        });
        callback();
    
    }).catch(e => {
        console.log(e)
    })
}


export default getUser;