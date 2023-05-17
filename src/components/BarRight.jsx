import React from "react";
import { BsSearch } from "react-icons/bs";

const BarRight = () => {
  return (
    <div className="mt-1 sticky top-1 px-5">
      <div>
        <label
          htmlFor="email"
          className="relative text-gray-400 focus-within:text-gray-600 block"
        >
          <BsSearch className="pointer-events-none w-5 h-5 absolute top-1/2 transform -translate-y-1/2 left-3" />

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Buscar en Twitter"
            className="bg-[#202327] rounded-3xl w-full px-10 py-2 border border-black text-white focus:border focus:border-primary-100 focus:outline"
          />
        </label>
      </div>
      <div className="bg-[#16181C] rounded-3xl mt-5">
        <h1 className="text-white font-bold text-lg p-5">Que esta pasando?</h1>
        <div href="/" className="px-5 py-2 hover:bg-[#1D1F23] flex gap-5">
            <div className="">
                <span className="text-gray-500 text-xs">España · EN DIRECTO</span>
                <h1 className="text-white font-semibold text-sm">Concluye el segundo día del debate del estado de la nación</h1>
                <span className="text-gray-500 text-xs">2.534 Tweets</span>
            </div>
            <div className="w-[10rem]">
                <img className="rounded-2xl" src="https://pbs.twimg.com/semantic_core_img/1547117153240748035/MDlgxGt6?format=jpg&name=120x120" alt="" />
            </div>
        </div>
        <div href="/" className="px-5 py-2 hover:bg-[#1D1F23]">
            <span className="text-gray-500 text-xs">Tendencias</span>
            <h1 className="text-white font-semibold text-sm">Ibai</h1>
            <span className="text-gray-500 text-xs">2.534 Tweets</span>
        </div>
        <div href="/" className="px-5 py-2 hover:bg-[#1D1F23]">
            <span className="text-gray-500 text-xs">Tendencias</span>
            <h1 className="text-white font-semibold text-sm">Ibai</h1>
            <span className="text-gray-500 text-xs">2.534 Tweets</span>
        </div>
        <div href="/" className="px-5 py-4 hover:bg-[#1D1F23] rounded-b-3xl">
            <a href="/" className="text-primary-100 font-semibold text-xs">Mostrar Más</a>
        </div>   
      </div>

      <div className="bg-[#16181C] rounded-3xl mt-5">
        <h1 className="text-white font-bold text-lg p-5">A quién seguir</h1>
        <div href="/" className="px-5 py-2 hover:bg-[#1D1F23] flex gap-5 items-center justify-between">
            <div className="flex gap-5">
                <div className="h-10 w-10">
                    <img className="rounded-full object-cover w-full h-full" src="https://pbs.twimg.com/profile_images/1583017746501193728/h5p2ZIWQ_400x400.jpg" alt="" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-white font-semibold text-sm">HAWKERS CO.</h1>
                    <span className="text-gray-500 text-xs">@HawkersCo</span>
                </div>      
            </div>
            <div className="">
                <a className="bg-white text-black text-xs font-medium rounded-full w-full py-2 px-5" href="/">Seguir</a>    
            </div>
        </div>
        <div href="/" className="px-5 py-2 hover:bg-[#1D1F23] flex gap-5 items-center justify-between">
            <div className="flex gap-5">
                <div className="h-10 w-10">
                    <img className="rounded-full object-cover w-full h-full" src="https://pbs.twimg.com/profile_images/1384439050476654592/0s5Duyfz_400x400.jpg" alt="" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-white font-semibold text-sm">Xiaomi España</h1>
                    <span className="text-gray-500 text-xs">@XiaomiEspana</span>
                </div>      
            </div>
            <div className="">
                <a className="bg-white text-black text-xs font-medium rounded-full w-full py-2 px-5" href="/">Seguir</a>    
            </div>
        </div>
        <div href="/" className="px-5 py-2 hover:bg-[#1D1F23] flex gap-5 items-center justify-between">
            <div className="flex gap-5">
                <div className="h-10 w-10">
                    <img className="rounded-full object-cover w-full h-full" src="https://pbs.twimg.com/profile_images/1282394566004477952/ukkPK4qO_400x400.jpg" alt="" />
                </div>
                <div className="flex flex-col">
                    <h1 className="text-white font-semibold text-sm">Marc ter Stegen</h1>
                    <span className="text-gray-500 text-xs">@mterstegen1</span>
                </div>      
            </div>
            <div className="">
                <a className="bg-white text-black text-xs font-medium rounded-full w-full py-2 px-5" href="/">Seguir</a>    
            </div>
        </div>
        <div href="/" className="px-5 py-4 hover:bg-[#1D1F23] rounded-b-3xl">
            <a href="/" className="text-primary-100 font-semibold text-xs">Mostrar Más</a>
        </div>
        
      </div>

      <div className="px-3 mt-5">
        <a className="text-gray-500 text-xs mr-3 hover:underline" href="/">Condiciones de Servicio</a>
        <a className="text-gray-500 text-xs mr-3 hover:underline" href="/">Política de Privacidad</a>
        <a className="text-gray-500 text-xs mr-3 hover:underline" href="/">Política de cookies</a>
        <a className="text-gray-500 text-xs mr-3 hover:underline" href="/">Accesibilidad</a>
        <a className="text-gray-500 text-xs mr-3 hover:underline" href="/">Información de anuncios</a>
        <a className="text-gray-500 text-xs mr-3 hover:underline" href="/">Más opciones</a>
        <br />
        <span className="text-gray-500 text-xs" href="/">© 2022 Twitter, Inc.</span>
      </div>
    </div>
  );
};

export default BarRight;
