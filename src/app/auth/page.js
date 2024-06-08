"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
// PrimeReact Components:
import { Stepper } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button'; 
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
// React hook form: 
import { useForm } from "react-hook-form";

function Registro() {

// Password Component by PrimeReact:
const [value, setValue] = useState('');
const header = <div className="font-bold mb-3 bg-black text-white">Pick a password</div>;
const footer = (
    <>
        <Divider className=" bg-black text-white"/>
        <p className="mt-2 bg-black text-white">Suggestions</p>
        <ul className="pl-2 ml-2 mt-0 line-height-3 bg-black text-white">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
        </ul>
    </>
);

    // React hook form:
  const { register,
    handleSubmit,
    formState: { errors } } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log('data del front', data);
    // Validation's password 
    if (data.password !== data.passwordconfirmation) {
      return alert("password do not match ")
    };

    // Conection with the API
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        // Personal Information:
        primer_nombre: (data.name)?.split(' ')[0],
        segundo_nombre: ((data.name)?.split(' ')[1]) !== undefined ? (data.name)?.split(' ')[1] : '' ,
        primer_apellido: (data.lastname)?.split(' ')[0],
        segundo_apellido: (data.lastname)?.split(' ')[1] !== undefined ? (data.lastname)?.split(' ')[1] : '' ,
        fecha_naci: (data.dateofbirth),
        telefono: data.phone,
        desc_personal: data.description,
        // User information:

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const resJSON = await res.status
    console.log("La respuesta:", res.status);

  });

  // Validations for the inputs:
  // For the nationality:
  const validateNationality = (value) => {
    if (value === "") {
      return true;
    }
    return true;
  };

  const stepperRef = useRef(null);

  return (
    <div className="h-screen w-screen bg-full-page bg-slate-900 flex justify-center items-center font-sans ">
      <div className="flex flex-row">
        <div className="relative rounded">
          <div className=" h-[42rem] w-[40rem]   bg-gradient-to-br from-indigo-500 to-slate-900  flex-row flex max-h-screen items-center justify-center">
            <Image src="/white-cotento.png" width={350} height={350} />
          </div>
        </div>
        <div className="text-black bg-black h-auto w-140">
          <form onSubmit={handleSubmit(onSubmit)} className="p-[3rem] space-y-1 bg-black">
            <h1 className="text-indigo-200 text-2xl font-bold ">
              Create An Account
            </h1>
            {/* Cambios: */}
            <Stepper ref={stepperRef} style={{ backgroundColor: 'black' }} className=" bg-black text-white">
              {/* This panel is for personal info */}
              <StepperPanel label="Datos Personales" style={{ backgroundColor: 'black' }}  className="bg-black text-white" step={1}>
                <div className="flex flex-row space-x-4 pt-8 bg-black text-white">
                  <div className="mb-5 bg-black">
                    <label
                      htmlFor="names"
                      className="block text-sm font-medium leading-6 text-white "
                    >
                      Names
                    </label>
                    <input
                      {...register("name", {
                        required: "Please write your name"
                      })}
                      type="text"
                      // id="names"
                      className="bg-black block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Names"
                    />
                    {errors.name && (
                      <span className="text-red-600 flex mt-1">{errors.name.message}</span>
                    )}
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium leading-6 text-white "
                    >
                      Last Name
                    </label>
                    <input
                      {...register("lastname", {
                        required: "Please write your last name"
                      })}
                      type="text"
                      name="lastname"
                      id="lastName"
                      className="bg-black block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Last Name"
                    />
                    {errors.lastname && (
                      <span className="text-red-600 flex mt-1">{errors.lastname.message}</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-row space-x-4 bg-black text-white">
                  <div>
                    <label
                      htmlFor="id"
                      className="block text-sm font-medium leading-6 text-white "
                    >
                      Identification Card
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        {...register("idcard", {
                          required: "Please write your ID"
                        })}
                        type="text"
                        name="idcard"
                        id="id"
                        className="bg-black block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Identification Card"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <select
                          {...register("idtype")}
                          id="idtype"
                          name="idtype"
                          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option value="V">V</option>
                          <option value="E">E</option>
                          <option value="P">P</option>
                        </select>
                      </div>
                    </div>
                    {errors.idcard && (
                      <span className="text-red-600 flex mt-1">{errors.idcard.message}</span>
                    )}
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium leading-6 text-white"
                    >
                      Date Of Birth
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        {...register("dateofbirth", {
                          required: "Please write the day of your birth"
                        })}
                        type="date"
                        id="date"
                        name="dateofbirth"
                        className="bg-black block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Day/Month/Years"
                      />
                      {errors.dateofbirth && (
                        <span className="text-red-600 flex mt-1">{errors.dateofbirth.message}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row space-x-4 bg-black text-white">
                  <div>
                    <label
                      htmlFor="id"
                      className="block text-sm font-medium leading-6 text-white "
                    >
                      number phone
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        {...register("phone", {
                          required: "Please write your number phone"
                        })}
                        type= "tlf"
                        name="phone"
                        id="id"
                        className="bg-black block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="number phone"
                      />
                    </div>
                    {errors.phone && (
                      <span className="text-red-600 flex mt-1">{errors.phone.message}</span>
                    )}
                  </div>
                  
                  <div className="relative mt-2 rounded-md shadow-sm">
                  <label
                      htmlFor="id"
                      className="block text-sm font-medium leading-6 text-white "
                    >
                      Gender
                    </label>
                      <input
                        {...register("idcard", {
                          required: "Please enter your gender"
                        })}
                        type="text"
                        name="idcard"
                        id="id"
                        className="bg-black block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Identification Card"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <select
                          {...register("gender")}
                          id="idtype"
                          name="idtype"
                          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option value="">options:</option>
                          <option value="E">E</option>
                          <option value="P">P</option>
                        </select>
                      </div>
                      </div>
                </div>
                {/* Description:  */}
                <div className="flex flex-row space-x-4 bg-black text-white">
                  <div>
                    <label
                      htmlFor="id"
                      className="block text-sm font-medium leading-6 text-white "
                    >
                      Description
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <textarea
                        {...register("description", {
                          // required: "Pleas"
                        })}
                        type="text"
                        name="description"
                        id="id"
                        className="bg-black block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Added your personal Description"
                      />
                    </div>
                    {/* {errors.idcard && (
                      <span className="text-red-600 flex mt-1">{errors.idcard.message}</span>
                    )} */}
                  </div>
                </div>
                <div className="flex pt-4 justify-content-end bg-black ">
                  <Button label="Next" icon="pi pi-arrow-right" className=" bg-violet-600  text-white " iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                </div>
              </StepperPanel>
              {/* This panel is for direction of the person */}
              <StepperPanel label="Dirección" step={2}>
                <div className="flex flex-row space-x-4  ">
                  <div>
                    <label
                      htmlFor="nationality"
                      className="block text-sm font-medium leading-6 text-white "
                    >
                      Nationality
                    </label>
                    <select
                      {...register("nationality", {
                        validate: validateNationality,
                        required: "Please Enter your country"
                      })}

                      id="nationality"
                      name="nationality"
                      className="w-[20rem] h-9 rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-white ring-1 ring-inset ring-gray-300 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    >
                      <option value="" className=" bg-black">Selecciona una opción</option>
                      <option value="Venezuela" className=" bg-black">Venezuela</option>
                      <option value="Colombia" className=" bg-black">Colombia</option>
                      <option value="Alemania" className=" bg-black">Alemania</option>
                    </select>
                    {errors.nationality && (
                      <span className="text-red-600 flex mt-1">{errors.nationality.message}</span>
                    )}
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium leading-6 text-white "
                    >
                      Address
                    </label>
                    <input
                      {...register("address", {
                        required: "Enter your address"
                      })}
                      type="text"
                      name="address"
                      id="address"
                      className="block w-full rounded-md bg-transparent border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Address"
                    />
                    {errors.address && (
                      <span className="text-red-600 flex mt-1">{errors.address.message}</span>
                    )}
                  </div>
                </div>
                <div className="flex pt-4 justify-content-between">
                  <Button label="Back" severity="secondary" className=" bg-violet-600" icon="pi pi-arrow-left" onClick={() => stepperRef.current.prevCallback()} />
                  <Button label="Next" icon="pi pi-arrow-right" className=" bg-violet-600" iconPos="right" onClick={() => stepperRef.current.nextCallback()} />
                </div>

              </StepperPanel>
              {/* This panel is for acounts */}
              <StepperPanel className=" bg-black text-red-600" label="Cuentas" step={2}>
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white "
                  >
                    Email
                  </label>
                  <input
                    {...register("email", {
                      required: "Introduce your email address"
                    })}
                    type="text"
                    name="email"
                    id="email"
                    className="bg-black block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="ejemplo@correo.com"
                  />
                  {errors.email && (
                    <span className="text-red-600 flex mt-1">{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <div className="flex flex-row space-x-4 bg ">
                    <div className="mb-5">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-white "
                      >
                        Create Password
                      </label>
                      <input
                    {...register("password", {
                      required: "Enter your password"
                    })}
                    type="password"
                    id="password"
                    className="bg-black block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="*********"
                  />
                      {/* <Password 
                      value={value} 
                      className=" bg-black block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setValue(e.target.value)} 
                      header={header} 
                      footer={footer}
                        {...register("password", {
                          required: "Enter your password"
                        })}
                        type="password"
                        id="password"
                        placeholder="*********"
                      /> */}
                      {errors.password && (
                        <span className="text-red-600 flex mt-1">{errors.password.message}</span>
                      )}
                    </div>
                    <div className="mb-5">
                      <label
                        htmlFor="confirmation"
                        className="block text-sm font-medium leading-6 text-white "
                      >
                        Confirmation Password
                      </label>
                      <input
                        {...register("passwordconfirmation", {
                          required: "Please enter again the password"
                        })}
                        type="password"
                        id="confirmation"
                        className="bg-black block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="*********"
                      />
                      {errors.passwordconfirmation && (
                        <span className="text-red-600 flex mt-1">{errors.passwordconfirmation.message}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex pt-4 justify-content-start">
                  <Button label="Back" severity="secondary" icon="pi pi-arrow-left" className=" bg-violet-600" onClick={() => stepperRef.current.prevCallback()} />
                  <div className="flex justify-center items-center ">
                    <button
                      type="submit"
                      className="w-64 h-[2.5rem] text-tiny bg-gradient-to-br from-indigo-600 to-slate-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400 hover:shadow-white "
                    >
                      Create Account
                    </button>
                  </div>
                </div>
              </StepperPanel>
            </Stepper>
            <p className="text-sm font-light text-gray-500">
              Do you already have an account?{" "}
              <a
                href="./login"
                className="font-medium text-violet-700 hover:underline"
              >
                Go to login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registro;
