import React from 'react';
import FontAwesome from 'react-fontawesome';




class Footer extends React.Component {



    render() {
        return (
            <footer className="page-footer font-small bg-dark ">


                <div className="container">


                    <div className="row">


                        <div className="col-md-12 py-5">
                            <div className="mb-5 flex-center">


                                <a href="#" className="fb-ic">
                                    <FontAwesome name='facebook' className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x" /> 
                                </a>

                                <a href="#" className="tw-ic">
                                    <FontAwesome name='twitter' className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"/> 
                                </a>
                                <a href="#" className="ins-ic">
                                    <FontAwesome name='instagram' className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"/> 
                                </a>

                                <a href="#" className="pin-ic">
                                    <FontAwesome name='pintrest' className="fab fa-pinterest fa-lg white-text fa-2x"/> 
                                </a>

                            </div>
                        </div>


                    </div>


                </div>



                <div className="footer-copyright text-center py-3 text-info">© 2020 Copyright:
              <a href="https://www.instagram.com/asumie_art/"> Asumie</a>
                </div>


            </footer>
        );
    }
}




export default Footer;