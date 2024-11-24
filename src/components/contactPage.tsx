import React from "react";
import { useState } from "react";
import slide1 from "@/app/assets/slideImg1.svg";
import slide2 from "@/app/assets/slideImg2.svg";
import slide3 from "@/app/assets/slideImg3.svg";
import slide4 from "@/app/assets/slideImg4.svg";
import Link from "next/link";
import contactIcon from "../../public/contactIcon.svg";
import githubIcon from "../../public/githubIcon.svg";
import twitterIcon from "../../public/twitterIcon.svg";
import linkdenIcon from "../../public/linkdenIcon.svg";
import NextIcon from "../../public/Nextbtn.svg";
import PrevIcon from "../../public/prevBtn.svg";
import Image from "next/image";

export default function ContactPage() {
  const slides = [
    {
      image: slide1,
      text: "View project",
      href: "https://tender.cash",
    },
    {
      image: slide2,
      text: "View project",
      href: "https://pakt.world",
    },
    {
      image: slide3,
      text: "View project",
      href: "https://myaza.co",
    },
    {
      image: slide4,
      text: "View project",
      href: "https://bitmama.io",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };
  return (
    <div>
      <section className=" mt-20">
        <div className="flex flex-col space-y-5">
          <h2 className="text-[48px] text-[#000000] font-semibold">
            My Projects
          </h2>
          <p className="font-designio text-[#000000] font-normal text-[32px] leading-tight">
            I am passionate about bridging the gap between development and
            operations to create efficient, reliable, and secure systems.
            Whether it’s building the next great app or optimizing your
            infrastructure for growth, I’m committed to driving success.
          </p>
        </div>
        <div className="flex sm-range:flex-col space-x-20 my-10 sm-range:items-start sm-range:space-x-0">
          <div className=" ">
            <div className="flex flex-col justify-center items-center w-[800px] h-[435px] rounded-3xl relative sm-range:hidden">
              <div className="relative flex items-center w-full  h-full overflow-hidden mt-2">
                <Image
                  src={slides[currentSlide].image}
                  alt={`Slide ${currentSlide + 1}`}
                  className=" w-full contain-layout"
                  // layout="fill"
                  // objectFit="contain"
                  // priority
                  loading="lazy"
                />

                {/* Text Overlay */}
                <div className="absolute bottom-[50px] left-[340px] flex items-center justify-center underline">
                  <a
                    href={slides[currentSlide].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg px-4 py-2 rounded-md"
                  >
                    {slides[currentSlide].text}
                  </a>
                </div>
              </div>
              <div className="flex justify-between absolute">
                <button onClick={handlePrev} className="mr-40">
                  <Image
                    src={PrevIcon}
                    height={128}
                    width={128}
                    alt="prevIcon"
                  />
                </button>
                <button onClick={handleNext} className="ml-40">
                  <Image
                    src={NextIcon}
                    height={128}
                    width={128}
                    alt="prevIcon"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* contact bar */}
          <div className="w-[246px] h-[420px] border-2 border-white rounded-2xl bg-#C3B9B0 shadow-[5px_1.5px_0px_0px_rgba(0,0,0,0.40)] cursor-pointer">
            <p className="text-[24px] font-designio leading-none mb-4 px-4 p-4 border-b border-[#2A231B4D]">
              Let’s connect to discuss how I can add value to your team or
              project
            </p>

            <div>
              <div className=" px-4 w-full flex justify-between border-b border-[#2A231B4D] pb-4 ">
                <p className="text-[32px] font-designiomedium font-normal">
                  Contact
                </p>
                <Image src={contactIcon} width={30} height={30} alt="" />{" "}
              </div>
              <Link
                href="https://github.com/BeardKoda"
                className="w-full flex justify-between border-b border-[#2A231B4D] p-4 "
              >
                <div className="flex items-center space-x-1">
                  <Image src={githubIcon} width={30} height={30} alt="" />{" "}
                  <p className="font-designiomedium font-normal text-[24px]">
                    Github
                  </p>
                </div>
                <Image src={githubIcon} width={30} height={30} alt="" />{" "}
              </Link>
              <Link
                href="https://x.com/beardkoda"
                className="w-full flex justify-between border-b border-[#2A231B4D] p-5 "
              >
                <div className="flex items-center space-x-2">
                  <Image src={twitterIcon} width={20} height={20} alt="" />
                  <p className="font-designiomedium font-normal text-[20px]">
                    Twitter(X)
                  </p>
                </div>
                <Image src={twitterIcon} width={20} height={20} alt="" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/joshua-akinsuyi/"
                className="w-full flex justify-between p-4 "
              >
                <div className="flex items-center space-x-2">
                  <Image src={linkdenIcon} width={30} height={30} alt="" />
                  <p className="font-designiomedium font-medium text-[20px]">
                    LinkedIn
                  </p>
                </div>
                <Image src={linkdenIcon} width={30} height={30} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
