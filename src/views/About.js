import React, { useState, useEffect } from 'react';
import Axios from 'axios';


function AboutCard(props) {
  return (
    <div className={`card m-2  card_style animate__animated animate__${props.fadeInDir}`} style={{ width: 100 + "%" }}>
      <div className="card-body">
        <h4>{props.title}</h4>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}



function About() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    let url = 'http://localhost:5000/about';
    Axios.get(url).then(res => {
      setAbout(res.data);

    });
  }, [])

  return (
    <div className="container-xl">
      {about.map((item, index) => {
        return (
          <AboutCard title={item.title} description={item.description}
            fadeInDir='fadeInLeftBig' key={index} />
        );
      })}
    </div>
  );


}


class AboutCard2 extends React.Component {


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










export default About;
