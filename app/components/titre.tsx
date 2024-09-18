import React from "react";

export default function Titre({ title }: { title: string }) {
  return (
    <>
      <h2 className="text-center text-3xl font-bold">{title}</h2>
      <div className=" flex justify-center items-center">
        <div className="h-[6px] w-[20px] bg-purpel"></div>
        <div className="h-[2px] w-[80px] bg-green "></div>
      </div>
    </>
  );
}
