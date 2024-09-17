import React, { useState } from 'react';
import { assets } from '../../assets/assets';

const LoginSignup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('SignUp');

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="w-full max-w-sm mx-auto bg-gray-200 p-6 rounded-lg shadow-md relative">
        <form>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-700">{currState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" className="cursor-pointer w-5 h-5" />
          </div>
          <div className="space-y-4">
            {currState === "SignUp" && 
              <input type="text" placeholder="Username" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />}
            
            <input type="email" placeholder="Email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" placeholder="Password" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <button className="w-full mt-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300">
            {currState === 'SignUp' ? "Create Account" : "Login"}
          </button>

          <div className="flex items-center mt-4">
            <input type="checkbox" required className="mr-2 text-blue-500 focus:ring-2 focus:ring-blue-500" />
            <p className="text-gray-600">By continuing I agree to the terms and conditions</p>
          </div>

          <div className="mt-4 text-center">
            {currState === 'Login' ? 
              <p className="text-gray-600">Create new account <span onClick={() => setCurrState("SignUp")} className="text-blue-500 cursor-pointer hover:underline">Click Here</span></p> : 
              <p className="text-gray-600">Already have an account? <span onClick={() => setCurrState("Login")} className="text-blue-500 cursor-pointer hover:underline">Login Here</span></p>}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
