"use client";

import ContactPage from "@/components/contactPage";
import Homepage from "@/components/homePage";
import SkillPage from "@/components/skillPage";
export default function Home() {
  return (
    <>
      <div className="w-screen relative overflow-hidden">
        <div className="absolut">
          <div className="flex fixed text-[32px] bg-[#C4BBB6] h-14 p-0 m-0 w-full justify-start z-10">
            <h4 className=" font-designiobold text-[32px] ml-9 mt-6">
              Akinsuyi Joshua Akinyemi
            </h4>
          </div>
        </div>

        <div className="mx-32">
          <div>
            <Homepage />
            <SkillPage />
            <ContactPage />
          </div>
        </div>
      </div>
    </>
  );
}
