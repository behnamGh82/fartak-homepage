"use client";

import { useState } from "react";
import Image from "next/image";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import item1 from "../images/item1.jpg";
import item2 from "../images/item2.jpg";
import item3 from "../images/item3.jpg";
export default function SucssesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      id: 1,
      image: item2,
      title: "کیانا طبسی",
    },
    {
      id: 2,
      image: item1,
      title: " علی بهرامی",
    },
    {
      id: 3,
      image: item3,
      title: "مهدی حسنی",
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
    <div className="w-2/3 h-[590px] bg-midpurpel flex px-20 py-20 items-center justify-center relative rounded-md z-10 box-border">
      <button
        className="absolute right-10"
        onClick={() => {
          handleNextBtn();
        }}
      >
        <BsChevronRight className="text-3xl font-bold text-white"></BsChevronRight>
      </button>
      <button
        className="absolute left-10"
        onClick={() => {
          handlePrevBtn();
        }}
      >
        <BsChevronLeft className="text-3xl font-bold text-white"></BsChevronLeft>
      </button>
      <div className=" w-full h-full flex gap-8 overflow-hidden">
        <div className="w-1/2 box-border overflow-hidden  max-h-[400px]">
          <h6 className="text-4xl">{items[currentIndex].title}</h6>
          <br />
          <p className="text-white text-justify">
            {" "}
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <Image
          src={items[currentIndex].image}
          className="h-full w-1/2"
          alt="any"
        ></Image>
      </div>
      <div className="flex justify-center items-start py-2 absolute bottom-4 flex-row-reverse">
        {items.map((item) => (
          <div className="text-5xl">
            <RxDotFilled
              className={
                item.id === items[currentIndex].id
                  ? "text-activedot"
                  : "text-dotpurpel"
              }
            ></RxDotFilled>
          </div>
        ))}
      </div>
    </div>
  );
}
