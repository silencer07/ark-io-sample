import logo from "../../logo.svg";
import React from "react";
import "./home.css";

export const Home: React.FC = () => (
    <div className="Home">
        <header className="Home-header">
            <img src={logo} className="Home-logo" alt="logo"/>
            <p>
                Edit <code>src/Home.tsx</code> and save to reload.
            </p>
            <a
                className="Home-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>
)

export default Home
