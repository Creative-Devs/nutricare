import React from 'react';
import './header.css'
import logo from './images/finallogo.png'
export default class Header extends React.Component {

    render() {
        return (
            <>
                <header >
                    <nav style={{ height: '130px' }} class="navbar navbar-expand-lg navbar-light bg-light">
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
                            <div style={{ marginLeft: '40px', fontWeight: '800', fontFamily: 'monospace', fontSize: '22px', color: 'black', padding: '1px' }} class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">

                                    <li className="nav-item">
                                        <a class="nav-link active" aria-current="page" href="/">
                                            Home
                                        </a>
                                    </li>
                                    <li class="nav-item pl-2">
                                        <a
                                            class="nav-link"
                                            href="/recipes"
                                        >
                                            Recipes

                                        </a>
                                    </li>
                                    <li class="nav-item pl-1 pr-1">
                                        <a
                                            class="nav-link"
                                            href="/favorite"
                                        >
                                            favorite

                                        </a>
                                    </li>
                                    <li class="nav-item pr-1">
                                        <a class="nav-link " href="/services">
                                            Services
                                        </a>
                                    </li>
                                    <li class="nav-item pr-1">
                                        <a class="nav-link" href="/programs">
                                            Programs
                                        </a>
                                    </li>
                                    <li class="nav-item ">
                                        <a class="nav-link" href="/profile">
                                            Profile
                                        </a>
                                    </li>

                                    <li class="nav-item pl-4">
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
