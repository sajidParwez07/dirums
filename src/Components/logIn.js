import React, { useState } from 'react';
import '../Styles/login.css';

const LoginPage = ({ onLogin }) => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');
    const [loginOption, setLoginOption] = useState('password');

    const handleEmailOrPhoneChange = (event) => {
        setEmailOrPhone(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLoginOptionChange = (event) => {
        setLoginOption(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();

        // Perform login logic here based on the login option selected

        if (loginOption === 'otp') {
            // Send OTP logic here

            // Assuming OTP validation is successful, call the onLogin callback passed from the parent component
            onLogin();
        } else {
            // Perform password-based login logic here (e.g., API call to validate credentials)

            // Assuming the login is successful, store the user information in localStorage
            const user = { emailOrPhone, password };
            localStorage.setItem('user', JSON.stringify(user));

            // Call the onLogin callback passed from the parent component
            onLogin();
        }
    };

    return (
        <form onSubmit={handleLogin} id='form'>
            <input
                type="text"
                id='input1'
                value={emailOrPhone}
                onChange={handleEmailOrPhoneChange}
                placeholder="Email or Phone"
            />

            <div className='choose' style={{ display: 'flex' }}>
                <div id='checks'>
                    <input
                        type="radio"
                        id="loginOptionPassword"
                        name="loginOption"
                        value="password"
                        checked={loginOption === 'password'}
                        onChange={handleLoginOptionChange}
                    />
                    <label htmlFor="loginOptionPassword">Password</label>
                </div>

                <div>
                    <input
                        type="radio"
                        id="loginOptionOTP"
                        name="loginOption"
                        value="otp"
                        checked={loginOption === 'otp'}
                        onChange={handleLoginOptionChange}
                    />
                    <label htmlFor="loginOptionOTP">OTP</label>
                </div>
            </div>

            {loginOption === 'otp' ? (
                <button id='input1' type="submit" style={{backgroundColor:'blue', color:'white'}}>Send OTP</button>
            ) : (
                <input
                    type="password"
                    id='input1'
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                />
            )}
            <div>
                <button id='input1' type="submit" style={{backgroundColor:'green', color:'white'}}>Login</button>
            </div>
        </form>
    );
};

export default LoginPage;
