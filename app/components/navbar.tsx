"use client";
import { title } from "process";
import React from "react";
import Image from "next/image";
import logo from "../images/Fartak1.png";
import search from "../images/search.png";
import watsapp from "../images/watsapp.png";
const routes = [
  {
    title: "خانه",
  },
  {
    title: "خدمات ما",
  },
  {
    title: "درباره ما",
  },
  {
    title: "مقالات",
  },
  {
    title: "تماس با ما",
  },
];
export default function Navbar() {
  return (
    <div className=" w-full h-32 flex items-end relative">
      <div className="flex bg-gray w-4/5 mx-auto box-border  ">
        <Image src={logo} alt="logo" className="absolute top-1 "></Image>
        <div className="flex grow justify-center">
          {routes.map((item) => (
            <p className="px-10 py-2 text-lg hover:border-b-4 border-purpel hover:font-bold">
              {item.title}
            </p>
          ))}
        </div>
        <Image src={watsapp} alt="logo" className="gap-2 "></Image>
        <div className=" bg-purpel flex w-72 items-center justify-center ">
          <Image src={search} alt="logo" className="gap-2 "></Image>
          <input
            type="text"
            placeholder="جستجو"
            className=" h-2/4 w-2/3 p-3 rounded-full placeholder-white bg-lightpurpel"
          />
        </div>
      </div>
    </div>
  );
}
