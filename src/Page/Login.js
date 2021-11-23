import React from 'react'
import Navbar from '../Component/Navbar'
import '../Style/Login.css'

function Login() {

    const getStarted = (e) =>{
        e.preventDefault();
    }

    return (
        <div className="login-div">
            <Navbar></Navbar>
            

            <div className="content-container">

                <div className="login-content">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime</h2>
                    <p>Ready to watch? Enter your email to create or restart your membership</p>

                    <div className="signup-form">
                        <form action="">
                            <input type="text" placeholder="Email address" id="email-input"></input>
                            <button className="red-btn getstarted-btn" onClick={(e) => getStarted(e)}>Get Started</button>
                        </form>
                    </div>
                </div>

            </div>
            <div class="login-gradient"/>
        </div>
    )
}

export default Login