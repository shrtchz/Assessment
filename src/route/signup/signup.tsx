import React, { useState } from "react";
import Main from "../../component/main/main";
import "./signup.css";

const Signup = () => {
    const [accountType, setAccountType] = React.useState("");
    const [name, setName] = React.useState("");
    const [companyName, setCompanyName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [altRegType, setAltRegType] = React.useState("phone");
    const [days, setDays] = React.useState([0]);
    const [year, setYear] = React.useState([0]);

    React.useEffect(() => {

        const values = [];
        for (let i = 1; i <= 31; i++) {
            values.push(i);
        }
        setDays(values);

        const yearValues = []
        for (let i = 1906; i <= 2006; i++) {
            yearValues.push(i);
        }
        setYear(yearValues);
    }, [])


    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <Main page="signup">
            <div className="signup">
                <h1>create your account</h1>
                <form className="form">
                    <div className="signup-top">
                        <select className="input-box" onChange={e => setAccountType(e.target.value)}>
                            <option disabled>Account Type</option>
                            <option value="personal">Personal</option>
                            <option value="business">Business</option>
                        </select>
                        {accountType && <input type="text" onChange={e => setCompanyName(e.target.value)} className="input-box" placeholder="company name" />}

                        <input type="text" onChange={e => setName(e.target.value)} className="input-box" placeholder="name" />
                        {
                            altRegType === "phone" ? <input type="email" onChange={e => setEmail(e.target.value)} className="input-box" placeholder="email" />
                                : <input type="number" onChange={e => setPhone(e.target.value)} className="input-box" placeholder="phone" />
                        }


                        <p className="signup-switch" onClick={() => setAltRegType(altRegType === "phone" ? "email" : "phone")}>use {altRegType} instead</p>
                    </div>
                    <div className="signup-bottom">
                        <h4>Date of birth</h4>
                        <p>This would not be shown publicly. Confirm your age even if this account is for a pet or something else.</p>

                        <div className="signup-dob">
                            <select className="input-box">
                                <option disabled>Month</option>
                                {months.map((month, index) => {return <option key={index}>{month}</option>})}
                            </select>
                            <select className="input-box">
                                <option disabled>Day</option>
                                {days.map((day, index) => {return <option key={index}>{day}</option>})}
                            </select>
                            <select className="input-box">
                                <option disabled>Year</option>
                                {year.map((y, index) => {return <option key={index}>{y}</option>})}
                            </select>
                        </div>

                        <button>Next</button>
                    </div>
                </form>
            </div>
        </Main>
    )
}

export default Signup;