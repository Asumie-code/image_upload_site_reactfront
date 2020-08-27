import React from 'react';



class Likebtn extends React.Component {
    constructor() {
        super();

        this.state = {
            liked: false
        };
    }

    handleClick =  (e) => {
        e.preventDefault();
        this.setState({
            liked: !this.state.liked
        });

    }



    render() {
        const label = this.state.liked ? 'Unlike' : 'Like'; 
        const btnstyl = this.state.liked ? 'btn btn-primary' : 'btn  btn-dark';
        return (
            <button className={btnstyl} onClick={this.handleClick}>{label}</button>
        ); 
    }
}



export default Likebtn;