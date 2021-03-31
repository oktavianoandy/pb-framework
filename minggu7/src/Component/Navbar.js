/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from './logo.svg'

export default function Navbar() {
    return (
        <div class="navbar-wrapper">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="col">
                    <a class="navbar-brand" href="#">
                        <img src={logo} width="50" height="50" alt=""></img>
                    </a>
                </div>

                <div class="float-left">
                    <div class="col ">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav float-right">
                                <li class="nav-item active">
                                    <a class="nav-link font-weight-bold" href="#">HOME <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link font-weight-bold" href="#">PRJOECT</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link font-weight-bold" href="#">AWARD</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-success font-weight-bold" href="#">CONTACT ME</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}