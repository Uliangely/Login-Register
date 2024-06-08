"use client";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import React from "react";
import { InputText } from "primereact/inputtext";
import { useState } from 'react';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';

export default function Login() {
  // Values for the password: 
  const [value, setValue] = useState('');

  // This is for the button Load:
  const [loading, setLoading] = useState(false);
  const load = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);


  };
  return (
      <div className="flex box-border w-full h-screen m-0 p-0 justify-center items-center bg-slate-900 font-sans">
        <div className=" h-[42rem] w-[42rem] bg-black flex flex-col justify-center items-center">
          {" "}
          <div className="justify-center items-center">
            {" "}
            {/* Logo */}
            <div className="flex justify-center items-center">
              <img
                src="/violet-cotento.png"
                className=" h-24 w-24 object-contain mb-10"
              />
            </div>
            {/* Form Box */}
            <div className="text-center">
              <h2 className="text-2xl font-bold  text-white mb-1">Sign In</h2>
            </div>
            <form className=' flex flex-col items-center' action="/login" method="post">
              <div className="mb-4">
                <div className="card flex justify-content-center">
                  <div className=" flex flex-col gap-2  m-3">
                    {/* User Input */}
                    <label htmlFor="username" className=' text-white'>Username</label>
                    <InputText id="username" aria-placeholder="username-help" />
                    <small id="username-help" className=' text-white'>
                      Enter your username to create your content.
                    </small>
                  </div>
                </div>
              </div>
                {/* Password */}
                <div className=' mb-3 '>
                <div className="card flex justify-content-center">
                  <Password value={value} onChange={(e) => setValue(e.target.value)} toggleMask />
                  </div>
              </div>
            </form>
            <div className="flex max-h-screen items-center justify-center bg-colo space-x-2 mb-5">
              <p className="text-white">Forgotten your password? </p>
              <p className="bg-gradient-to-bl from-violet-700 to-indigo-600 bg-clip-text text-transparent hover:from-slate-50  hover:to-purple-500 transition duration-200">
                Reset password
              </p>
            </div>
            <div className=" flex justify-center items-center">
              <Button label="LOGIN" icon="pi pi-check" loading={loading} onClick={load}
                className='bg-gradient-to-br from-indigo-600 to-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 hover:shadow-white' />
            </div>
            <div className="flex space-x-2 mt-5 ">
              <p className='text-white'>Don't have an account?</p>
              <a href="auth/register">
                <p className="bg-gradient-to-bl from-violet-700 to-indigo-600 bg-clip-text text-transparent hover:from-slate-50  hover:to-purple-500 transition duration-200">
                  Sign up for free
                </p>
              </a>
            </div>
          </div>
        </div>
        {/* The other side of screen */}
        <div className=" h-[42rem] w-[40rem]  bg-gradient-to-br from-indigo-500 to-slate-900  flex-row flex max-h-screen items-center justify-center">
          <img src="/white-cotento.png" width={350} height={350} />
        </div>
      </div>
    
  );
}
