import React from "react";
import { Link } from 'react-router-dom';
import "./main.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const NavigationList = ["About",
    "Terms of Service",
    "Privacy Policy",
    "Help",
    " Cookie Policy",
    "Advertising",
    "Settings"]

type ContentProps = {
    children: React.ReactNode;
    page: String;
}


const Main = ({ children, page }: ContentProps) => {
    const navigate = useNavigate();
    return (
        <div className="main">

            <div className="main-body">
            {page !== "landing" && <span className="close" onClick={() => navigate("/")}>x</span>}
                <div className="main-top">
                   
                    <img src={logo} alt="logo" className="logo" />
                </div>
                {children}
            </div>
            {page === "landing" && <div className="nav">
                {NavigationList.map((item, index) => { return <Link to="#" key={index}>{item}</Link> })}
                <p>&copy; 2024 Shortchase, Inc</p>
            </div>}
        </div>
    )
}

export default Main;