import React from "react";
import { FaTwitter, FaRegListAlt} from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { FiHash, FiMail, FiSave } from "react-icons/fi";
import { BsBell } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { CgMoreO } from "react-icons/cg";

const Sidebar = () => {
  return (
    <div>
      <aside className="w-[15rem]" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-black">
        <FaTwitter className="text-white text-2xl ml-2 mb-5"></FaTwitter>
          <ul className="space-y-4">
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818]"
              >
                <RiHome7Fill className="text-white text-2xl"></RiHome7Fill>
                <span className="ml-3 font-normal">Inicio</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818]"
              >
                <FiHash className="text-white text-2xl"></FiHash>
                <span className="ml-3 font-normal">Explorar</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818]"
              >
                <BsBell className="text-white text-2xl"></BsBell>
                <span className="ml-3 font-normal">Notificaciones</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818]"
              >
                <FiMail className="text-white text-2xl"></FiMail>
                <span className="ml-3 font-normal">Mensajes</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818]"
              >
                <FiSave className="text-white text-2xl"></FiSave>
                <span className="ml-3 font-normal">Guardados</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818]"
              >
                <FaRegListAlt className="text-white text-2xl"></FaRegListAlt>
                <span className="ml-3 font-normal">Lista</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818]"
              >
                <BiUser className="text-white text-2xl"></BiUser>
                <span className="ml-3 font-normal">Perfil</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-3xl dark:text-white hover:bg-gray-100 dark:hover:bg-[#181818] mb-10"
              >
                <CgMoreO className="text-white text-2xl"></CgMoreO>
                <span className="ml-3 font-normal">Más opciones</span>
              </a>
            </li>
            <li>
              <a href="/" className="bg-primary-100 rounded-3xl px-14 py-2 font-bold text-white hover:bg-primary-200">Twittear</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
