import React from 'react';

const NavTabs = props => (
    <ul className = "nav nav-tabs">
    <li className = "nav-item">
    <a onclick = {()= props.handlePageChange
    ("Home")} className = {props.currentPage === "Home"? "nav-link active":"nav-link"}>
    </a>
    </li>
    <li className = "nav-item">
    <a onclick = {()= props.handlePageChange
    ("Environmental")} className = {props.currentPage === "Environmental"? "nav-link active":"nav-link"}>
    </a>
    </li>
    <li className = "nav-item">
    <a onclick = {()= props.handlePageChange
    ("Account")} className = {props.currentPage === "Account"? "nav-link active":"nav-link"}>
    </a>
    </li>
    <li className = "nav-item">
    <a onclick = {()= props.handlePageChange
    ("Locations")} className = {props.currentPage === "Locations"? "nav-link active":"nav-link"}>
    </a>
    </li>
    <li className = "nav-item">
    <a onclick = {()= props.handlePageChange
    ("Login")} className = {props.currentPage === "Login"? "nav-link active":"nav-link"}>
    </a>
    </li>
    <li className = "nav-item">
    <a onclick = {()= props.handlePageChange
    ("Products")} className = {props.currentPage === "Products"? "nav-link active":"nav-link"}>
    </a>
    </li>

);