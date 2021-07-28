import React, { Component } from 'react'

export default class Pricing extends Component {
    render() {
        return (
            <div>
                <section className="pricing" id="Pricing">
                    <div className="container">
                        <div className="title">
                            <div className="row">
                                <div className="col-md-12">
                                    <h1>Pricing</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisc <br />
                                        ing elit. Vivamus lacinia odio vitae vestibulum ves <br />
                                        tibulum.{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-cards">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-title">
                                            <h5>
                                                NEWBIE CLASS <br />
                                                $50.00
                                            </h5>
                                        </div>
                                        <img src="images/badge.png" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                                            </p>
                                            <a href="#" className="btn btn-primary">
                                                Register Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-title">
                                            <h5>
                                                ADVANCE CLASS <br />
                                                $100.00
                                            </h5>
                                        </div>
                                        <img src="images/badge.png" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                                            </p>
                                            <a href="#" className="btn btn-primary">
                                                Register Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-title">
                                            <h5>
                                                EXPERT CLASS <br />
                                                $200.00
                                            </h5>
                                        </div>
                                        <img src="images/badge.png" className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <p className="card-text">
                                                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                                            </p>
                                            <a href="#" className="btn btn-primary">
                                                Register Now
                                            </a>
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
