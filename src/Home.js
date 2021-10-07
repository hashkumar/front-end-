import React from "react";
import "./App.css";

function Home() {
    return(
    <>
    <nav className="navbar">

        <label className="logo"><strong>Logo.</strong></label>
        <ul className="navbar-contant">
            <li><a href="/">Home</a></li>
            <li><a href="/">Work</a></li>
            <li><a href="/">Sheet</a></li>
        </ul>
    </nav>

    <section>
     <div><h3>login page</h3></div>
    </section>

    </>
    );
}

export default Home;