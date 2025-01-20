import Header from "./Header";
import { useState } from "react";
const LoginPage = () => {
  const [IsSignInform, setSignInform] = useState(true);
  const toggleSignInForm = () => {
    setSignInform(!IsSignInform);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg"
          alt="bg-image"
        />
      </div>
      <form className="absolute p-12 w-3/12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {IsSignInform ? "Sign In" : "Sign Up"}
        </h1>
        {!IsSignInform && (
          <input
            type="text"
            placeholder="Full name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {IsSignInform ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {IsSignInform
            ? " Are you new to Netflix? Sign up now."
            : "Already a user? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
