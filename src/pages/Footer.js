import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
            <footer className="footer">
                    <div className="container">
                        <div className="row">
                            {/* <div className="col-md-3">
                                <div className="farea">
                                    <h4 className="ftitle">Yoga</h4>
                                    <p>
                                        Lorem ipsum dolor sit, amet <br />
                                        consectetur adipisicing elit. Modi, <br />
                                        aliquid? consectetur adipisicing elit.
                                    </p>
                                </div>
                            </div> */}
                            {/* <div className="col-md-3">
                                <div className="farea">
                                    <h4 className="ftitle">About</h4>
                                    <a href="#">History</a>
                                    <br />
                                    <a href="#">Our Team</a>
                                    <br />
                                    <a href="#">Brand Guidelines</a>
                                    <br />
                                    <a href="#">Terms &amp; Condition</a>
                                    <br />
                                    <a href="#">Privacy Policy</a>
                                </div>
                            </div> */}
                            {/* <div className="col-md-3">
                                <div className="farea">
                                    <h4 className="ftitle">Services</h4>
                                    <a href="#">How to Order</a>
                                    <br />
                                    <a href="#">Our Product</a>
                                    <br />
                                    <a href="#">Order Status</a>
                                    <br />
                                    <a href="#">Promo</a>
                                    <br />
                                    <a href="#">Payment Method</a>
                                </div>
                            </div> */}
                            <div className="col-md-12">
                                <div className="farea">
                                    <h4 className="ftitle">Follow</h4>
                                    <a href="#">
                                        <i className="fa fa-" />
                                        <i className="fa fa-facebook" /> Facebook
                                    </a>
                                    
                                    <a href="#">
                                        <i className="fa fa-twitter" /> Twitter
                                    </a>
                                
                                    <a href="#">
                                        <i className="fa fa-instagram" /> Instagram
                                    </a>
                            
                                    <a href="#">
                                        <i className="fa fa-whatsapp" />
                                        Whatsapp
                                    </a>
                                    <hr/>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

            </div>
        )
    }
}
