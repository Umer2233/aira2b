import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import cogoToast from "cogo-toast";
import DeleteAccountApi from './../api/deleteAccountApi';
import whiteLogo from '../assets/icons/logo-white-top.webp'


const DeleteAccount = ({ deleteEmailHandler, setTimerCondition, startTimer, setAuthOtpRoute }) => {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const screenWidth = window.innerWidth;

  const deleteAccountSubmit = async (data) => {
    deleteEmailHandler(data.email)
    const userEmail = localStorage.setItem("userEmail" , data.email)    

    try {
      const res = await DeleteAccountApi(data);
      const resData = await res.json();
      cogoToast.success(`${resData.message}`, {
        position: screenWidth > "640px" ? "bottom-right" : "top-center",
      });
      if (resData.success) {
        setAuthOtpRoute(true)
        navigate('/enterOTP');
        setTimerCondition(true);
        startTimer();
        let currentTime = new Date();
        currentTime.setMinutes(currentTime.getMinutes() + 1);
        localStorage.setItem("currTime", JSON.stringify(currentTime));
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: ContactUs.js:14 ~ onSubmit ~ error:",
        error.message
      );
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
          <h2>Delete Your Account</h2>
          <form action="#" onSubmit={handleSubmit(deleteAccountSubmit)}>
            <div className="input-box">
              <input
                type="email"
                placeholder="Your email"
                {...register("email", {
                  required: "The email field is required.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "The email must be a valid email address.",
                  },
                })}
                name="email"
                className={`bg-gray-100 p-3 w-full indent-1 rounded outline-0 ${errors?.message
                  ? "border-red border-2"
                  : "focus:outline-2"
                  }`}
              />
            </div>

            <div className="button-enter-email">
              <button className="next-btn-box" type='submit'>Next</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default DeleteAccount