import React from 'react';
import './header.css'
import logo from './images/finallogo.png'
export default class Header extends React.Component {

    render() {
        return (
            <>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cairo:wght@200&family=Caveat&family=Dancing+Script&family=Lobster&family=Permanent+Marker&display=swap');
                </style>
                <header >
                    <nav style={{ height: '150px' }} class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <img src={logo} style={{ width: '120px', height: '120px' }} />
                            <a style={{ fontSize: '48px', color: 'rgb(235, 74, 11)' }} class="navbar-brand" href="/">
                                NutriCare
                            </a>
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div style={{ marginLeft: '90px', marginTop: '7px', fontWeight: 'bolder', fontFamily: 'monospace', fontSize: '25px', color: 'black', padding: '10px' }} class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">

                                    <li className="nav-item pr-3">
                                        <a class="nav-link active" aria-current="page" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li class="nav-item pr-3">
                                        <a class="nav-link " href="/services">
                                            Services
                                        </a>
                                    </li>
                                    <li class="nav-item pr-1">
                                        <a class="nav-link" href="/programs">
                                            Programs
                                        </a>
                                    </li>
                                    <li class="nav-item pr-1">
                                        <a class="nav-link" href="/profile">
                                            Profile
                                        </a>
                                    </li>

                                    <li class="nav-item pl-1">
                                        <a
                                            class="nav-link"
                                            href="/recipes"
                                        >
                                            Recipes

                                        </a>
                                    </li>
                                    <li class="nav-item pl-1">
                                        <a
                                            class="nav-link"
                                            href="/favorite"
                                        >
                                            favorite

                                        </a>
                                    </li>
                                    <li class="nav-item pl-5">
                                        <a
                                            class="nav-link"
                                            href="/aboutus"
                                        >
                                            About Us

                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </nav>
                </header>
            </>
        );
    }
}
