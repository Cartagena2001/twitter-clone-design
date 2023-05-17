import React from "react";
import { BiComment } from "react-icons/bi";
import { TiArrowRepeat } from "react-icons/ti";
import { AiOutlineHeart } from "react-icons/ai";

const Twitts = ({
  name,
  perfil,
  arroba,
  hour,
  desc,
  picture,
  coments,
  likes,
  share,
}) => {
  return (
    <article className="p-2 rounded-lg my-5 grid grid-cols-6">
      <section className="h-10 w-10 min-w-[2.5rem]">
        <img
          className="rounded-full object-cover h-full w-full whitespace-nowrap"
          src={perfil}
          alt=""
        />
      </section>
      <section className="col-span-5">
        <div className="flex gap-2">
          <h1 className="text-white font-bold text-xs">{name}</h1>
          <span className="text-gray-600 font-normal text-xs">{arroba}</span>
          <span className="text-gray-600 font-normal text-xs">{hour}</span>
        </div>
        <div className="break-words">
          <p className="text-white text-sm">{desc}</p>
        </div>
        <div className="grid justify-items-center max-w-xs mt-3">
          <img className="rounded-xl w-full" src={picture} alt="" />
        </div>
        <div className="flex justify-between mt-5">
          <a href="/" className="flex gap-2 items-center text-lg">
            <BiComment className="text-gray-600 hover:text-primary-100" />
            <span className="text-gray-600 text-sm">{coments}</span>
          </a>
          <a href="/" className="flex gap-2 items-center text-lg">
            <TiArrowRepeat className="text-gray-600 hover:text-green-500" />
            <span className="text-gray-600 text-sm">{share}</span>
          </a>
          <a href="/" className="flex gap-2 items-center text-lg">
            <AiOutlineHeart className="text-gray-600 hover:text-red-500" />
            <span className="text-gray-600 text-sm">{likes}</span>
          </a>
        </div>
        <div></div>
      </section>
    </article>
  );
};

export default Twitts;
