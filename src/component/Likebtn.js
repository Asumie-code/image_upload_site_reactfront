import React, { useState } from 'react';



function Likebtn() {
    const [liked, setLiked] = useState(false);

   const  handleClick =  (e) => {
        e.preventDefault();
        setLiked(!liked);
    }


    const label = liked ? 'Unlike' : 'Like'; 
    const btnstyl = liked ? 'btn btn-primary' : 'btn  btn-dark';
    return (
        <button className={btnstyl} onClick={handleClick}>{label}</button>
    ); 

}





export default Likebtn;