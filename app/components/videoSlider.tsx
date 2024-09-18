"use client";

import { useState } from "react";
import Image from "next/image";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import vid1 from "../images/vid1.jpeg";
import vid2 from "../images/vid2.png";
export default function VideoSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      id: 1,
      image: vid1,
    },
    {
      id: 2,
      image: vid2,
    },
  ];
  const handleNextBtn = () => {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrevBtn = () => {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <div className="relative overflow-hidden rounded-md  w-full h-full flex items-center justify-center ">
      <button
        className="absolute right-6"
        onClick={() => {
          handleNextBtn();
        }}
      >
        <BsChevronRight className="text-3xl font-bold text-white"></BsChevronRight>
      </button>
      <button
        className="absolute left-6"
        onClick={() => {
          handlePrevBtn();
        }}
      >
        <BsChevronLeft className="text-3xl font-bold text-white"></BsChevronLeft>
      </button>{" "}
      <Image
        src={items[currentIndex].image}
        className="w-full h-full"
        alt="any"
      ></Image>
      <div className="flex justify-center items-start py-2 absolute bottom-20 flex-row-reverse">
        {items.map((item) => (
          <div className="text-5xl">
            <RxDotFilled
              className={
                item.id === items[currentIndex].id
                  ? "text-white"
                  : "text-slate-400"
              }
            ></RxDotFilled>
          </div>
        ))}
      </div>
      <div className="absolute h-[80px] w-full bg-purpel bottom-0 p-5 bg-opacity-80 text-white text-2xl text-center">
        عنوان ویدئو
      </div>
    </div>
  );
}
