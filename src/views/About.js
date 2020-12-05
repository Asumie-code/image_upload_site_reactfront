import React from 'react';
import Axios from 'axios';


class AboutCard extends React.Component {


  render() {
    return (
      <div className={`card m-2  card_style animate__animated animate__${this.props.fadeInDir}`} style={{ width: 100 + "%" }}>
      <div className="card-body">
        <h4>{this.props.title}</h4>
        <p className="card-text">{this.props.description}</p>
      </div>
    </div>
    );
  }
}







class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: []
    };
    
  }



  componentDidMount() {
    let url = 'http://localhost:5000/about';
    Axios.get(url).then(res => {
      this.setState({ about: res.data });

    })
  }







  render() {
    return (
      <div className="container-xl">
        {this.state.about.map((item, index) => {
          return (
            <AboutCard title={item.title} description={item.description} 
            fadeInDir='fadeInLeftBig' key={index}/>
          );
        })}
      </div>
      );
  }
}



export default About;
