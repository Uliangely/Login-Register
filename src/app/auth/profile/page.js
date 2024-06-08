import React from "react";
import Image from "next/image";

function Profile() {
  return (
    <div className="min-h-full font-san">
      <nav className="bg-slate-900 font-san">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  src="/violet-cotento.png"
                  width={350}
                  height={350}
                  className="h-8 w-16"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className=" text-white rounded-md px-3 py-2 text-sm font-medium"
                    aria-current="page"
                  >
                    Dashboard
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <div className="relative ml-3">
                  <div>
                    {/* <button
                      type="button"
                      className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="absolute -inset-1.5"></span>
                      <span className="sr-only">Open user menu</span> */}
                      <Image
                        src="/user.svg"
                        width={350}
                        height={350}
                        className="h-8 w-8 rounded-full"
                      />
                    {/* </button> */}
                  </div>
                  <div
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabindex="-1"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-1"
                    >
                      Settings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabindex="-1"
                      id="user-menu-item-2"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-black">Profile</h1>
        </div>
      </header>

      <div className="container mx-auto max-w-2xl">
        <div className="flex flex-col items-center">
          <img
            src="/user.svg"
            alt="Imagen de perfil"
            className="rounded-full w-48 h-48 object-cover"
          />
          <h2 className="text-2xl font-bold mt-4">Uliangely Cádiz</h2>
          <p className="text-gray-500">Front-end Developer</p>
          <p className="text-gray-500">Carcas, Venezuela</p>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold">Información de contacto</h3>
          <div className="flex mt-4">
            <div className="w-1/2">
              <p className="text-gray-500">Correo electrónico:</p>
              <a href="mailto:yourname@flowbite.com" className="text-blue-500">
                uliangely@gmail.com
              </a>
            </div>
            <div className="w-1/2">
              <p className="text-gray-500">Dirección residencial:</p>
              <p className="text-gray-500">23 de Enero</p>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-500">Número de teléfono:</p>
            <p className="text-gray-500">+58 0412-000-0000</p>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold">Habilidades de software</h3>
        </div>
      </div>
    </div>
  );
}

export default Profile;
