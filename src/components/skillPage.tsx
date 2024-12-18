import React from "react";

import Image from "next/image";
import downLoadIcon from "../../public/downloadIcon.svg";
import kubertIcon from "../../public/kubertIcon.svg";
import dockerIcon from "../../public/dockerIcon.svg";
import awsIcon from "../../public/awsIcon.svg";
import golangIcon from "../../public/golangIcon.svg";
import pythonIcon from "../../public/pythonIcon.svg";
import nextjsIcon from "../../public/nextjsIcon.svg";
import nodejsIcon from "../../public/nodejsIcon.svg";
import typescriptIcon from "../../public/typescriptIcon.svg";
import expressIcon from "../../public/expressIcon.svg";
import phpIcon from "../../public/phpIcon.svg";

export default function SkillPage() {
  return (
    <div>
      <section className="min-h-[80vh] from-bottom-to-top sm-range:h-fit">
        <div className="flex justify-between sm-range:flex-col">
          <h2 className="text-[48px] text-[#000000] font-semibold sm-range:text-[44px]">
            Skills and Services
          </h2>

          <a
            href="/path/to/your-file.pdf"
            download="MyFile.pdf"
            className="flex justify-center items-center  rounded-full bg-[#A0918C] relative w-[280px] h-[46px] shadow-[3px_5px_0px_0px_rgba(0,0,0,0.40)] sm-range:w-[250px]"
          >
            <p className="font-designiomedium text-[20px] -ml-5">
              Download Resume
            </p>
            <Image
              src={downLoadIcon}
              height={50}
              width={50}
              alt="icon"
              className="absolute right-0"
            />
          </a>
        </div>
        <div className="">
          <div className=" grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] sm-range:grid-cols-2 md-range:grid-cols-3 lg-range:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8 mt-24">
            <div className=" h-[150px] bg-gradient-to-l from-[#B9AFA7] to-[#B5ABA2] rounded-3xl flex flex-col justify-center items-center shadow-[5px_1.5px_0px_0px_rgba(0,0,0,0.40)]">
              <Image
                src={kubertIcon}
                height={80}
                width={80}
                alt="kubertIcon"
                className="mix-blend-luminosity"
              />
              <p className="text-[#2A231B] text-[32px] font-normal">
                Kurbenates
              </p>
            </div>
            <div className=" h-[150px] bg-gradient-to-l from-[#B9AFA7] to-[#B5ABA2] rounded-3xl flex flex-col justify-center items-center shadow-[5px_1.5px_0px_0px_rgba(0,0,0,0.40)]">
              <Image
                src={dockerIcon}
                height={80}
                width={80}
                alt="kubertIcon"
                className="mix-blend-luminosity"
              />
              <p className="text-[#2A231B] text-[32px] font-normal">Docker</p>
            </div>
            <div className=" h-[150px] bg-gradient-to-l from-[#B9AFA7] to-[#B5ABA2] rounded-3xl flex flex-col justify-center items-center shadow-[5px_1.5px_0px_0px_rgba(0,0,0,0.40)]">
              <Image
                src={awsIcon}
                height={80}
                width={80}
                alt="kubertIcon"
                className="mix-blend-luminosity"
              />
              <p className="text-[#2A231B] text-[32px] font-normal">Aws</p>
            </div>
            <div
              className=" h-[150px] bg-gradient-to-l from-[#B9AFA7] to-[#B5ABA2] rounded-3xl flex flex-col justify-center items-center shadow-[5px_1.5px_0px_0px_rgba(0,0,0,0.40)]
           
            "
            >
              <Image
                src={golangIcon}
                height={70}
                width={140}
                alt="kubertIcon"
                className="mix-blend-luminosity mb-4"
              />
              <p className="text-[#2A231B] text-[32px] font-normal">Golang</p>
            </div>
            <div className=" h-[150px] bg-gradient-to-l from-[#B9AFA7] to-[#B5ABA2] rounded-3xl flex flex-col justify-center items-center shadow-[5px_1.5px_0px_0px_rgba(0,0,0,0.40)]">
              <Image
                src={pythonIcon}
                height={80}
                width={80}
                alt="kubertIcon"
                className="mix-blend-luminosity"
              />
              <p className="text-[#2A231B] text-[32px] font-normal">Python</p>
            </div>
          </div>
          <div className=" px-10 mt-24">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] sm-range:grid-cols-2 md-range:grid-cols-3 lg-range:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-8">
              <div className="flex flex-col justify-center items-center ">
                <Image
                  src={nextjsIcon}
                  height={150}
                  width={150}
                  alt="kubertIcon"
                  className="mix-blend-luminosity"
                />
                <p className="font-designiobold font-normal text-[#55463F] text-[32px] ">
                  Next.js
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={nodejsIcon}
                  height={150}
                  width={150}
                  alt="kubertIcon"
                  className="mix-blend-luminosity"
                />
                <p className="font-designiobold font-normal text-[#55463F] text-[32px] ">
                  Node.js
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={typescriptIcon}
                  height={150}
                  width={150}
                  alt="kubertIcon"
                  className="mix-blend-luminosity"
                />
                <p className="font-designiobold font-normal text-[#55463F] text-[32px] ">
                  Typescript
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={expressIcon}
                  height={150}
                  width={150}
                  alt="kubertIcon"
                  className="mix-blend-luminosity mb-4"
                />
                <p className="font-designiobold font-normal text-[#55463F] text-[32px] ">
                  Express.js
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={phpIcon}
                  height={150}
                  width={150}
                  alt="kubertIcon"
                  className="mix-blend-luminosity"
                />
                <p className="font-designiobold font-normal text-[#55463F] text-[32px] ">
                  PHP
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={nextjsIcon}
                  height={150}
                  width={150}
                  alt="kubertIcon"
                  className="mix-blend-luminosity"
                />
                <p className="font-designiobold font-normal text-[#55463F] text-[32px] ">
                  React.js
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
