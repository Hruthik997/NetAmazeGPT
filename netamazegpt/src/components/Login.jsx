import React, { useRef, useState } from "react";
import Header from "./Header";
import { NETFLIX_BACKGROUND_URL } from "../utils/constants";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { auth } from "../utils/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  // You can use useState variable as well
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userNameRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = () => {
    const errMsg = checkValidData(
      emailRef?.current?.value,
      passwordRef?.current?.value,
      userNameRef?.current?.value,
      isSignInForm
    );
    setErrorMsg(errMsg);
    if (errMsg) return;

    // Sign In / Sign Up
    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, emailRef?.current?.value,
        passwordRef?.current?.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          console.log(error);
          setErrorMsg("Invalid Email Address / Password.");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={NETFLIX_BACKGROUND_URL}
          alt="Background image for login screen"
        />
      </div>
      <form
        className="absolute bg-black p-12 w-4/12 my-26 mx-auto right-0 left-0 text-white opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? (
          <input
            type="text"
            placeholder="User Name"
            className="p-4 my-2 w-full bg-gray-800 rounded-lg"
            ref={userNameRef}
          />
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg"
          ref={emailRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-800 rounded-lg"
          ref={passwordRef}
        />
        <p className="text-red-700 font-bold text-lg py-2">{errorMsg}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
