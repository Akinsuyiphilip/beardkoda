import React from "react";
import Image from "next/image";
import searchIcon from "../../public/searchdiamond.svg";
import skillIcon1 from "../../public/skillIcon1.svg";
import skillIcon2 from "../../public/skillIcon2.svg";
import skillIcon3 from "../../public/skillIcon3.svg";
import skillIcon4 from "../../public/skillIcon4.svg";

export default function Homepage() {
  return (
    <div className="">
      <section className="mt-44 from-bottom-to-top min-h-[80vh] h-fit sm-range:min-h-[90vh] sm-range:h-fit sm-range:mt-24 ">
        <h1 className=" text-[90px] font-semibold leading-tight sm-range:text-[75px] ">
          BeardKoda
        </h1>
        <div className="w-full flex justify-between sm-range:flex-col">
          <div className="w-2/3 space-y-7 sm-range:w-full">
            <h3 className="text-[40px] font-thin -mt-5 w-[650px] leading-tight sm-range:w-full sm-range:text-[24px] sm-range:leading-none sm-range:-mt-1">
              Site Reliability Engineer | DevOps Engineer | Software Engineer
            </h3>
            <p className="text-[30px] text-[#000000] font-normal w-[703px] leading-tight sm-range:text-[24px] sm-range:w-full sm-range:leading-tight">
              As Software and DevOps Engineer, I bring the best of both worlds:
              crafting robust, scalable software solutions while ensuring
              seamless deployment and operations. With a deep understanding of
              software development and DevOps practices, I empower teams to
              deliver high-quality products faster and more efficiently.
            </p>
          </div>
          <div className="flex flex-col w-[300px] space-y-6 -mt-4 sm-range:w-full sm-range:mt-8">
            <div className="font-semibold items-start space-y-2 ">
              <div className="flex space-x-3 text-start text-[24px] slide-in1">
                <Image src={searchIcon} height={24} width={24} alt="icon" />
                <p className="text-[24px] text-[#55463FCC]">
                  Software Development
                </p>
              </div>
              <div className="flex space-x-3 text-start text-[24px] slide-in2">
                <Image src={searchIcon} height={24} width={24} alt="icon" />
                <p className="text-[24px] text-[#55463FCC]">DevOps Practices</p>
              </div>
              <div className="flex space-x-3 text-start text-[24px] slide-in3">
                <Image src={searchIcon} height={24} width={24} alt="icon" />
                <p className="text-[24px] text-[#55463FCC]">
                  Containerization & Orchestration
                </p>
              </div>
              <div className="flex space-x-3 text-start text-[24px] slide-in4">
                <Image src={searchIcon} height={24} width={24} alt="icon" />
                <p className="text-[24px] text-[#55463FCC] ">
                  SMonitoring Optimisation
                </p>
              </div>
            </div>
            <div className="flex space-x-4 slide-in sm-range:space-x-8">
              <Image src={skillIcon1} height={48} width={48} alt="skillicon1" />
              <Image src={skillIcon2} height={48} width={48} alt="skillicon2" />
              <Image src={skillIcon3} height={48} width={48} alt="skillicon3" />
              <Image src={skillIcon4} height={48} width={48} alt="skillicon4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
