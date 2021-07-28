import React, { Component } from 'react'

export default class Classdetail extends Component {
    render() {
        return (
            <div>
                <section className="class-section" id="Class">
                    <div className="container">
                        <div className="title">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>CHOOSE CLASS</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisc <br />
                                        ing elit. Vivamus lacinia odio vitae vestibulum ves <br />
                                        tibulum.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="featureimg">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <img
                                            src="images/classimg1.png"
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h4 className="card-title">NEWBIE CLASS</h4>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet, <br />
                                                consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img
                                            src="images/classimg1.png"
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h4 className="card-title">ADVANCED CLASS</h4>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet, <br />
                                                consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <img
                                            src="images/classimg2.png"
                                            className="card-img-top"
                                            alt="..."
                                        />
                                        <div className="card-body">
                                            <h4 className="card-title">EXPERT CLASS</h4>
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet, <br />
                                                consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
