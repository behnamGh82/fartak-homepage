import React from "react";
import Image from "next/image";
import { BsChevronLeft } from "react-icons/bs";
import article1 from "../images/article1.png";
export default function ArticleCard({
  image,
  title,
}: {
  image: any;
  title: string;
}) {
  return (
    <div className="w-1/3 bg-lightgray rounded-md overflow-hidden flex flex-col">
      <Image src={image} className="w-full h-auto" alt={title}></Image>
      <div className="px-8 h-[200px] max-h-[200px]">
        <div className="flex items-center pt-3">
          <BsChevronLeft className="text-purpel font-bold text-4xl"></BsChevronLeft>
          <h3 className=" text-3xl">{title}</h3>
        </div>
        <div className="  h-2/3 overflow-hidden pt-3 px-2">
          <p className=" text-base ">
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
      </div>
    </div>
  );
}
