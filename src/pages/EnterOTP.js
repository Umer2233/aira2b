import React, { useState } from 'react';
import config from "../config";
import cogoToast from "cogo-toast";
import { useNavigate } from 'react-router-dom';
import whiteLogo from '../assets/icons/logo-white-top.webp'
import OtpInput from 'react-otp-input';

const EnterOTP = ({ deleteEmail, formatTime, timeLeft, startTimer , setAuthOtpRoute}) => {

    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const [myData, setMyData] = useState([]);
    const TIMEOUT_DURATION = 10000;
    const screenWidth = window.innerWidth;

    // GET OTP INPUT VALUE
    const [otp, setOtp] = useState('');

    // DELETE ACCOUNT

    const confirmDeleteAccount = async (e) => {
        e.preventDefault();
        try {
            const response = await Promise.race([
                fetch(`${config.BASE_URL}/confirm-deletion`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${config.API_ACCESS_TOKEN}`
                    },
                    body: JSON.stringify({ email: deleteEmail, otp: otp, }),
                }),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Timeout')), TIMEOUT_DURATION)
                ),
            ]);

            const result = await response.json();
            if (!response.ok) {
                cogoToast.warn(`${result.message}`, {
                    position: screenWidth > "640px" ? "bottom-right" : "top-center",
                });
            } else {
                cogoToast.success(`${result.message}`, {
                    position: screenWidth > "640px" ? "bottom-right" : "top-center",
                });
                navigate('/delete-account');
                setAuthOtpRoute(false)
            }

            setMyData(result);
        } catch (error) {
            setError(`Data not found: ${error.message}`);
        }

        console.log(myData);
    };

    // TIMER LEFT TO RESEND THE CODE

    // RESEND CODE VIA EMAIL

    const ResendApiCode = async (data) => {
        const userEmail = (localStorage.getItem("userEmail"));
        try {
            const response = await Promise.race([
                fetch(`${config.BASE_URL}/send-delete-user-otp`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${config.API_ACCESS_TOKEN}`
                    },
                    body: JSON.stringify({ email: userEmail, }),
                }),
                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error('Timeout')), TIMEOUT_DURATION)
                ),
            ]);

            const result = await response.json();
            if (!response.ok) {
                cogoToast.warn(`${result.message}`, {
                    position: screenWidth > "640px" ? "bottom-right" : "top-center",
                });
            } else {
                cogoToast.success(`${result.message}`, {
                    position: screenWidth > "640px" ? "bottom-right" : "top-center",
                });
                startTimer();

            }

            setMyData(result);
        } catch (error) {
            setError(`Data not found: ${error.message}`);
        }
    };

    return (
        <>
            <div className="main-box-back">
                <div className='top-logo-box'>
                    <img src={whiteLogo}></img>
                    <a className="site-link-text" href='https://cabmap.com/'>W  W  W  .  C  A  B  M  A  P  .  C  O  M</a>
                </div>

                <div className="wrapper">
                    <h2>Enter Verification Code</h2>
                    <form action="#" onSubmit={confirmDeleteAccount}>
                        {/* <div className="otp-verification-boxes">
                            <input className="otp" name='Otp1' type="text" value={optGetCode.Otp1} onChange={optEnterKeyBox} maxLength={1} />
                            <input className="otp" name='Otp2' type="text" value={optGetCode.Otp2} onChange={optEnterKeyBox} maxLength={1} />
                            <input className="otp" name='Otp3' type="text" value={optGetCode.Otp3} onChange={optEnterKeyBox} maxLength={1} />
                            <input className="otp" name='Otp4' type="text" value={optGetCode.Otp4} onChange={optEnterKeyBox} maxLength={1} />
                            <input className="otp" name='Otp5' type="text" value={optGetCode.Otp5} onChange={optEnterKeyBox} maxLength={1} />
                            <input className="otp" name='Otp6' type="text" value={optGetCode.Otp6} onChange={optEnterKeyBox} maxLength={1} />
                        </div> */}

                        <div className='otp-verification-boxes'>
                            <OtpInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderInput={(props) => <input {...props} />}
                            />
                        </div>

                        <div className="button-enter-email button-otp-another">
                            <button className="next-btn-box delete-account-btn" type='submit'>Delete Account</button>
                        </div>

                        {
                            (timeLeft < 0) ? <div className='d-flex justify-content-center'><button className='resend-code-btn' type='button' onClick={ResendApiCode}>Resend Code</button></div> : <p className='code-expired-text'>Your code is expired in {formatTime(timeLeft)} </p>
                        }
                    </form>
                </div>
            </div>
        </>
    )
}

export default EnterOTP