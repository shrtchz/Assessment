import Main from "../../component/main/main";
import "./land.css";
import { Link } from "react-router-dom";
import playstore from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const Images = [appstore, playstore];
    const navigate = useNavigate();

    return (
        <Main page="landing">
            <div className="landing-body">
                <div className="landing-top">
                    <h2>Welcome to Shortcase</h2>
                    <small>The prediction market of the world</small>
                </div>
                <button onClick={() => navigate("/signup")} style={{marginBottom: "20px"}}>Sign up with phone or email</button>
                <div className="landing-terms">
                    <p>By signing up, you agree to Shortchase's
                         <strong>&nbsp;Terms of Service</strong> and acknowledge you have read our
                         <strong>&nbsp;Privacy Policy</strong> including <strong>&nbsp;Cookie Use</strong></p>
                </div>

                <p><strong>Have an account?</strong> <Link to={"/login"}>Sign In</Link></p>

                <div className="landing-bottom">
                    <p>Coming Soon</p>
                    <div className="landing-bottom-icon">
                        {Images.map((item, index) => {return <img key={index} src={item} alt="app-download" className="land-bottom-image"/>})}
                    </div>
                </div>
            </div>
        </Main>
    )
}

export default Landing;