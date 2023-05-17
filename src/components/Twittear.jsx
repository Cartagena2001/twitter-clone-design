import React from "react";
import { BiMap } from "react-icons/bi";
import {
  AiOutlinePicture,
  AiOutlineFileGif,
  AiOutlineSmile,
  AiOutlineCalendar,
} from "react-icons/ai";
import { BsBarChartLine } from "react-icons/bs";

const Twittear = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-row justify-start gap-4">
        <img src="https://pbs.twimg.com/profile_images/1658625181126914049/kys59-Um_400x400.jpg" alt="" className="h-10 w-10 rounded-full" />
        <input
          type="textarea "
          placeholder="¿Que esta pasando?"
          className="focus:outline bg-transparent w-xl text-xl p-2 border-0 text-white focus:border-0 focus:outline-none"
        />
      </div>
      <div className="mt-5 flex gap-3 justify-between items-center">
        <div className="flex gap-3">
          <AiOutlinePicture className="text-primary-100 text-xl" />
          <AiOutlineFileGif className="text-primary-100 text-xl" />
          <BsBarChartLine className="text-primary-100 text-xl" />
          <AiOutlineSmile className="text-primary-100 text-xl" />
          <AiOutlineCalendar className="text-primary-100 text-xl" />
          <BiMap className="text-primary-100 text-xl" />
        </div>
        <div>
          <a
            href="/"
            className="bg-primary-100 rounded-3xl px-10 py-2 font-bold text-white hover:bg-primary-200 text-xs"
          >
            Twittear
          </a>
        </div>
      </div>
    </div>
  );
};

export default Twittear;
