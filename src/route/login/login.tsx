import React from "react";
import { Link } from "react-router-dom";
import Main from "../../component/main/main";
import "./login.css";
import {serverPoint} from "../../config";

const Login = () => {
    const [userInfo, setUserInfo] = React.useState("");
    const [password, setPassword] = React.useState("");

    const server = (e:any) => {
        e.preventDefault();

        fetch(`${serverPoint}/send-token` , 
            {method: "POST", body: JSON.stringify({info: userInfo, password: password})}
        ).then(response => response.json())
        .then(response => {console.log(response)})
        .catch(error => console.log(error));
    }
    return (
        <Main page="login">
            <div className="login">
                <h1>Log in to Shortcase</h1>
                <form className="form" onSubmit={server}>
                    <div className="login-top">
                        <input type="text" onChange={e => setUserInfo(e.target.value)} className="input-box" placeholder="username, email, phone" />

                        <input type="password" onChange={e => {setPassword(e.target.value)}} placeholder="password" className="input-box" />

                        <Link to="#" style={{color: "green"}}>Forgot Password?</Link>
                    </div>
                    <div className="login-bottom">
                        <button>sign in</button>
                        <p>Don't have an account? <Link to="sign-up">Sign Up</Link></p>
                    </div>
                </form>
            </div>
        </Main>
    )
}

export default Login;