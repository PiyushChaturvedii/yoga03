import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header className="header-section">
                    <div className="main-menu">
                        <div className="container">
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <a className="navbar-brand" href="#">
                                    <img src="images/Logo.png" alt />
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#Home">
                                                Home <span className="sr-only">(current)</span>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#Class">
                                                Class
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#Pricing">
                                                Pricing
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#About">
                                                About Us
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#Contact">
                                                Contact us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src="images/bannerimg.png" alt />
                                </div>
                                <div className="col-md-6">
                                    <h1>YOGA CLASS</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipi <br />
                                        scing elit. Donec fringilla neque euismod volu <br />
                                        tpat cursus. Vestibulum ac pretium orci,
                                    </p>
                                    <a className="btn btn-info">Join Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

            </div>
        )
    }
}
