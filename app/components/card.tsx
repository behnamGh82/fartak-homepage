import React from "react";
import Image from "next/image";
export default function Card({
  image,
  title,
  desc,
}: {
  image: any;
  title: string;
  desc: string;
}) {
  return (
    <div className="w-1/3 bg-lightpurpel rounded-md overflow-hidden flex flex-col items-center justify-center p-12">
      <Image src={image} className="h-[150px]" alt={title}></Image>
      <h3 className="text-white text-3xl">{title}</h3>
      <p className=" text-xl">{desc}</p>
    </div>
  );
}
