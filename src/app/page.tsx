"use client";
import ContactPage from "@/components/contactPage";
import Homepage from "@/components/homePage";
import SkillPage from "@/components/skillPage";
export default function Home() {
  return (
    <>
      <div className="w-screen relative overflow-hidden">
        <div className="relative">
          <div className="flex pointer-events-none fixed text-[32px] bg-gradient-to-b from-[#C4BBB6] via-[#C4BBB6]/80 to-transparent h-[6rem] p-0 m-0 w-full justify-start z-10">
            <h4 className=" font-designiobold text-[32px] ml-9 mt-6">
              Akinsuyi Joshua Akinyemi
            </h4>
            <div className="absolute bottom-0 left-0 w-full h-[18px]  "></div>
          </div>
        </div>

        <div className="mx-[10%] w-[75%] flex flex-col justify-center">
          <div>
            <Homepage/>
            <SkillPage />
            <ContactPage />
          </div>
        </div>
      </div>
    </>
  );
}
