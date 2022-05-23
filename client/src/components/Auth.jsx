import React, { useState } from "react";
import Cookies from "universal-cookie";
import signupBackground from "../assets/signup.jpeg";
import axios from "axios";

// Bring in a new instance of cookies
const cookies = new Cookies();

const initialState = {
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    avatarURL: ""
}

const Auth = () => {
    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Gather data from the form
        const { 
                fullName, 
                username, 
                password, 
                phoneNumber, 
                avatarURL 
            }   = form;

        const URL = "http://localhost:5000/auth";

        // Make the actual request
        const { data: { token, userId, hashedPassword } } = await 
                            axios.post(`${URL}/${isSignup} ? "signup : "login"`,
                            { 
                                username,
                                password,
                                fullName, 
                                phoneNumber, 
                                avatarURL
                            })
        // Set the cookies up for login
        cookies.set("token", token);
        cookies.set("username", username);
        cookies.set("fullName", fullName);
        cookies.set("userId", userId);

        // Set the cookies for signup
        if (isSignup) {
            cookies.set("phoneNumber", phoneNumber);
            cookies.set("avatarURL", avatarURL);
            cookies.set("hashedPassword", hashedPassword);
        }

        // Reload the browser once the cookies are setup
        window.location.reload();
    }

    const handleChange = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        });
    }

    // Get the previous state of isSignup and change it
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }

    // Sign Up form that can switch to Sign In form
    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>
                        {isSignup ? "Sign Up!" : "Sign In!"}
                    </p>

                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">
                                    Full Name
                                </label>

                                <input 
                                    name="fullName"
                                    type="text"
                                    placeholder="Full Name"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="username">
                                    Userame
                                </label>

                                <input 
                                    name="userName"
                                    type="text"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">
                                    Phone Number
                                </label>

                                <input 
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">
                                    Avatar URL
                                </label>

                                <input 
                                    name="avatarURL"
                                    type="text"
                                    placeholder="Avatar URL"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="password">
                                    Password
                                </label>

                                <input 
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    required
                                />
                        </div>

                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="confirmPassword">
                                    Confirm Password
                                </label>

                                <input 
                                    name="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}

                        <div className="auth__form-container_fields-content_button">
                            <button>
                                {isSignup ? "Signup" : "Signin"}
                            </button>
                        </div>
                    </form>

                    <div className="auth__form-container_fields-account">
                        <p>
                            {
                                isSignup
                                ? "Already have an account? "
                                : "Don't have an account? "
                            }

                            <span onClick={switchMode}>
                                { isSignup ? "Sign In" : "Sign Up"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="auth__form-container_image">
                <img
                    img src={signupBackground}
                    alt="Sign In image"
                />
            </div>
        </div>
    )
}

export default Auth;