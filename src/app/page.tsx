import Image from "next/image";
import searchIcon from "../../public/searchdiamond.svg";
import skillIcon1 from "../../public/skillIcon1.svg";
import skillIcon2 from "../../public/skillIcon2.svg";
import skillIcon3 from "../../public/skillIcon3.svg";
import skillIcon4 from "../../public/skillIcon4.svg";
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
import contactIcon from "../../public/contactIcon.svg";
import githubIcon from "../../public/githubIcon.svg";
import twitterIcon from "../../public/twitterIcon.svg";
import linkdenIcon from "../../public/linkdenIcon.svg";

export default function Home() {
  return (
    <>
      <div className=" overflow-x-hidden w-screen">
        <div className="flex fixed text-[32px] bg-[#C4BBB6] h-16 p-0 m-0 w-full justify-start z-10">
          <h4 className=" font-designiobold text-[32px] ml-9 mt-7">
            Akinsuyi Joshua Akinyemi
          </h4>
        </div>
        <section className="mx-28 mt-44">
          <h1 className=" text-[90px] font-semibold">BeardKoda</h1>
          <div className="w-full flex justify-between space-x-10">
            <div className="w-2/3 space-y-7">
              <h3 className="text-[40px] font-thin -mt-5 w-[650px] leading-tight">
                Site Reliability Engineer | DevOps Engineer | Software Engineer
              </h3>
              <p className="text-[30px] text-[#000000] font-normal w-[703px] leading-tight">
                As Software and DevOps Engineer, I bring the best of both
                worlds: crafting robust, scalable software solutions while
                ensuring seamless deployment and operations. With a deep
                understanding of software development and DevOps practices, I
                empower teams to deliver high-quality products faster and more
                efficiently.
              </p>
            </div>
            <div className="flex flex-col w-[300px] space-y-6 -mt-4">
              <div className="font-semibold items-start space-y-2 ">
                <div className="flex space-x-3 text-start text-[24px] ">
                  <Image src={searchIcon} height={24} width={24} alt="icon" />
                  <p className="text-[24px] text-[#55463FCC]">
                    Software Development
                  </p>
                </div>
                <div className="flex space-x-3 text-start text-[24px]">
                  <Image src={searchIcon} height={24} width={24} alt="icon" />
                  <p className="text-[24px] text-[#55463FCC]">
                    DevOps Practices
                  </p>
                </div>
                <div className="flex space-x-3 text-start text-[24px]">
                  <Image src={searchIcon} height={24} width={24} alt="icon" />
                  <p className="text-[24px] text-[#55463FCC]">
                    Containerization & Orchestration
                  </p>
                </div>
                <div className="flex space-x-3 text-start text-[24px]">
                  <Image src={searchIcon} height={24} width={24} alt="icon" />
                  <p className="text-[24px] text-[#55463FCC]">
                    SMonitoring Optimisation
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Image
                  src={skillIcon1}
                  height={48}
                  width={48}
                  alt="skillicon1"
                />
                <Image
                  src={skillIcon2}
                  height={48}
                  width={48}
                  alt="skillicon2"
                />
                <Image
                  src={skillIcon3}
                  height={48}
                  width={48}
                  alt="skillicon3"
                />
                <Image
                  src={skillIcon4}
                  height={48}
                  width={48}
                  alt="skillicon4"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mx-28 mt-10">
          <div className="flex justify-between">
            <h2 className="text-[48px] text-[#000000] font-semibold">
              Skills and Services
            </h2>

            <button className="flex justify-center items-center  rounded-full bg-[#A0918C] relative w-[280px] h-[46px] shadow-[3px_5px_0px_0px_rgba(0,0,0,0.40)]">
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
            </button>
          </div>
          <div className="">
            <div className="flex justify-between mt-10">
              <div className="w-[200px] h-[169px] bg-gradient-to-l from-[#B9AFA7] to-[#B5ABA2] rounded-3xl flex flex-col justify-center items-center shadow-[5px_1.5px_0px_0px_rgba(0,0,0,0.40)]">
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
              <div className="w-[200px] h-[169px] bg-gradient-to-l from-[#B9AFA7] to-[#B5ABA2] rounded-3xl flex flex-col justify-center items-center shadow-[5px_1.5px_0px_0px_rgba(0,0,0,0.40)]">
                <Image
                  src={dockerIcon}
                  height={80}
                  width={80}
                  alt="kubertIcon"
                  className="mix-blend-luminosity"
                />
                <p className="text-[#2A231B] text-[32px] font-normal">Docker</p>
              </div>
              <div className="w-[200px] h-[169px] bg-gradient-to-l from-[#B9AFA7] to-[#B5ABA2] rounded-3xl flex flex-col justify-center items-center shadow-[5px_1.5px_0px_0px_rgba(0,0,0,0.40)]">
                <Image
                  src={awsIcon}
                  height={80}
                  width={80}
                  alt="kubertIcon"
                  className="mix-blend-luminosity"
                />
                <p className="text-[#2A231B] text-[32px] font-normal">Aws</p>
              </div>
              <div className="w-[200px] h-[169px] bg-gradient-to-l from-[#B9AFA7] to-[#B5ABA2] rounded-3xl flex flex-col justify-center items-center shadow-[5px_1.5px_0px_0px_rgba(0,0,0,0.40)]">
                <Image
                  src={golangIcon}
                  height={70}
                  width={140}
                  alt="kubertIcon"
                  className="mix-blend-luminosity mb-4"
                />
                <p className="text-[#2A231B] text-[32px] font-normal">Golang</p>
              </div>
              <div className="w-[200px] h-[169px] bg-gradient-to-l from-[#B9AFA7] to-[#B5ABA2] rounded-3xl flex flex-col justify-center items-center shadow-[5px_1.5px_0px_0px_rgba(0,0,0,0.40)]">
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
            <div className=" px-10 relative overflow-x-auto custom-scroll-hide mt-24">
              <div className="flex items-center min-h-fit space-x-10">
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

        <section className="mx-28 mt-20">
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
          <div className="">
            <div className="flex justify-between my-10">
              <div className="flex flex-col justify-center items-center w-[838px] h-[445px] border-2 border-white rounded-3xl">
                view project
              </div>
              <div className="w-[246px] h-[445px] border-2 border-white rounded-2xl bg-#C3B9B0 shadow-[5px_1.5px_0px_0px_rgba(0,0,0,0.40)]">
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
                  <div className="w-full flex justify-between border-b border-[#2A231B4D] p-4 ">
                    <div className="flex items-center space-x-1">
                      <Image src={githubIcon} width={30} height={30} alt="" />{" "}
                      <p className="font-designiomedium font-normal text-[24px]">
                        Github
                      </p>
                    </div>
                    <Image src={githubIcon} width={30} height={30} alt="" />{" "}
                  </div>
                  <div className="w-full flex justify-between border-b border-[#2A231B4D] p-5 ">
                    <div className="flex items-center space-x-2">
                      <Image src={twitterIcon} width={20} height={20} alt="" />
                      <p className="font-designiomedium font-normal text-[20px]">
                        Twitter(X)
                      </p>
                    </div>
                    <Image src={twitterIcon} width={20} height={20} alt="" />
                  </div>
                  <div className="w-full flex justify-between border-b border-[#2A231B4D] p-4 ">
                    <div className="flex items-center space-x-2">
                      <Image src={linkdenIcon} width={30} height={30} alt="" />
                      <p className="font-designiomedium font-medium text-[20px]">
                        LinkedIn 
                      </p>
                    </div>
                    <Image src={linkdenIcon} width={30} height={30} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
