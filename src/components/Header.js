import React from 'react';
export default class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
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
                    <div style={{ marginLeft: '20%' }} class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li className="nav-item pr-3">
                                <a class="nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li class="nav-item pr-3">
                                <a class="nav-link" href="/services">
                                    Services
                                </a>
                            </li>
                            <li class="nav-item pr-3">
                                <a class="nav-link" href="/programs">
                                    Programs
                                </a>
                            </li>
                            <li class="nav-item pr-3">
                                <a class="nav-link" href="/profile">
                                    Profile
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
        );
    }
}
