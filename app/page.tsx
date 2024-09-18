import Image from "next/image";
import header from "../app/images/header.jpeg";
import fartaklogo2 from "../app/images/fartaklogo2.png";
import Titre from "./components/titre";
import uni from "./images/uni.png";
import Card from "./components/card";
import bors from "./images/bors.png";
import moshavere from "./images/moshavere.png";
import poshtibani from "./images/poshtibani.png";
import SucssesSlider from "./components/sucssesSlider";
import uk from "./images/uk.jpeg";
import group from "./images/group.jpg";
import article1 from "./images/article1.png";
import article2 from "./images/article2.png";
import article3 from "./images/article3.png";
import ArticleCard from "./components/articleCard";
import VideoSlider from "./components/videoSlider";
import ImageSlider from "./components/imageSlider";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
export default function Home() {
  const Services = [
    {
      id: 1,
      image: bors,
      title: "بورس تحصیلی",
      desc: "ثبت درخواست و پیگیری مراحل بورسیه",
    },
    {
      id: 2,
      image: moshavere,
      title: "مشاوره تحصیلی",
      desc: "ویزای تحصیلی انواع رشته و مقاطع بالاتر",
    },
    {
      id: 3,
      image: poshtibani,
      title: "پشتیبانی",
      desc: "انجام تمامی مراحل پروسه اپلای",
    },
  ];
  const articles = [
    {
      id: 1,
      image: article1,
      title: " دانشگاه ریرسون",
    },
    {
      id: 2,
      image: article2,
      title: " دانشگاه آلبرتا",
    },
    {
      id: 3,
      image: article3,
      title: "دانشگاه کراندال",
    },
  ];
  return (
    <div>
      <div className="w-full bg-teal-800 mt-1 relative overflow-hidden">
        <div>
          <Image src={header} className="w-full h-[800px]" alt="header"></Image>
          <h1 className="absolute  z-10 top-36 right-56 text-white text-6xl text-justify">
            یک <span className="text-lightpurpel font-bold">مشاور خوب</span>{" "}
            <br></br>
            <span className="text-green font-bold">ارزشمند</span> است.
          </h1>
          <div id="shape" className=""></div>
          <p className=" absolute top-[460px] right-[250px] z-20 text-white font-bold text-2xl">
            مشاوره و ارزیابی
          </p>
          <div id="hex" className="opacity-50 bg-black"></div>
        </div>
        <div className="absolute bottom-0 bg-black h-1/4 w-full text-white flex px-48 py-2">
          <div className="w-1/3 px-14">
            <Titre title="درباره ما:"></Titre>
          </div>
          <div className=" flex flex-col items-start py-8">
            <p className="text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <div className="flex items-center">
              <BsChevronLeft className="font-bold text-2xl text-green"></BsChevronLeft>
              <button className="text-green">بیشتر بخوانید</button>
            </div>
          </div>
          <Image src={fartaklogo2} alt="logo"></Image>
        </div>
      </div>
      <div className="bg-lightgray w-full h-[280px] pt-10">
        <div className="w-1/3 px-14">
          <Titre title="دانشگاه ها:"></Titre>
        </div>
        <Image
          src={uni}
          className=" w-4/5 h-auto m-auto"
          alt="university"
        ></Image>
      </div>
      <div className=" w-full pt-10 ">
        <div className="w-1/3 px-14">
          <Titre title="خدمات ما:"></Titre>
        </div>
        <div className=" flex  justify-center items-center gap-5 px-72 py-5 mb-12">
          {Services.map((item) => (
            <Card
              image={item.image}
              title={item.title}
              desc={item.desc}
              key={item.id}
            ></Card>
          ))}
        </div>
      </div>

      <div className=" w-full bg-gray flex px-72 gap-5 py-5 relative">
        <div className="w-1/3 px-14 absolute right-32 text-white z-30 top-10">
          <Titre title="پرونده های موفق:"></Titre>
        </div>
        <SucssesSlider></SucssesSlider>
        <div className="flex flex-col w-1/3 h-full gap-5">
          <div className="relative overflow-hidden rounded-md">
            {" "}
            <Image src={group} alt="students"></Image>
            <div className="absolute h-[80px] w-full bg-purpel bottom-0 p-5 bg-opacity-80 text-white text-4xl">
              ویزای تحصیلی
            </div>
          </div>
          <div className="relative overflow-hidden rounded-md">
            {" "}
            <Image src={uk} alt="fartak offer"></Image>
            <div className="absolute h-[80px] w-full bg-purpel bottom-0 p-5 bg-opacity-80 text-white text-4xl">
              آفر ویژه فرتاک
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full pt-10">
        <div className="w-1/3 px-14">
          <Titre title="گزیده مقالات:"></Titre>
        </div>
        <div className=" flex  justify-center items-center gap-5 px-72 py-5">
          {articles.map((item) => (
            <ArticleCard
              image={item.image}
              title={item.title}
              key={item.id}
            ></ArticleCard>
          ))}
        </div>
      </div>

      <div className=" w-full flex  px-40  ">
        <div className="w-1/2 h-full ">
          <div className="w-1/3 ">
            <Titre title=" ویدئوها:"></Titre>
          </div>
        </div>
        <div className="w-1/2 h-full ">
          <div className="w-1/3 ">
            <Titre title=" تصاویر:"></Titre>
          </div>
        </div>
      </div>
      <div className="flex w-full h-[400px] px-64 mb-20">
        <div className="w-1/2 h-full  p-2">
          <VideoSlider></VideoSlider>
        </div>
        <div className="w-1/2 h-full p-2">
          <ImageSlider></ImageSlider>
        </div>
      </div>
    </div>
  );
}
