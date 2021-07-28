import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <section className="contact" id="Contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="title">
                                    <h1>DONT MISS OUR UPDATE</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                        elit. Vivamus lacinia odio vitae <br />
                                        vestibulum vestibulum.{" "}
                                    </p>
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your Email"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-light" type="button">
                                            Subscribe
                                        </button>
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
