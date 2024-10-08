import React from "react";
import Event from "./Event";

function Hero() {
  return (
    <div className="w-screen bg-[#BFEEFF] pb-12">
      <div className="flex flex-col-reverse lg:flex-row items-center w-full justify-center font-Volkswagen">
        <div className="flex flex-col items-center gap-4">
          <img src="/img/hero.png" alt="" />
          <div className="mb-6 lg:mb-0 flex gap-2 lg:gap-12 text-sm md:text-xl lg:text-2xl text-[#E46871] font-Stanberry">
            <a
              href="/registration"
              className="border-2 rounded-full border-black p-1 md:px-4 md:py-2"
            >
              Registration
            </a>
            <a
              href="https://drive.google.com/file/d/1i8ML4T1Ov0IyqjdpKAP_TDL1qtYKs50c/view?usp=sharing"
              target={"blank"}
              className="border-2 rounded-full border-black py-1 px-6 md:px-8 md:py-2"
            >
              Video
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:-mr-52">
          <img className="hidden lg:flex" src="/img/hero-2.png" alt="" />
          <img
            className="w-[200px] mb-4 md:w-[350px] md:mb-12 flex lg:hidden"
            src="/img/hero-2-1.png"
            alt=""
          />
        </div>
      </div>

      <div className="divide-y-2 divide-[#FFCF4C] divide-dashed bg-[#FFF3BF]">
        <Event className="text-[#26C8FF]" link="about/#bio" odd={true}>
          <span>Biology Competition</span>
        </Event>
        <Event className="text-[#0BC8A4]" link="about/#poster">
          <span>Public Poster</span>
        </Event>
        <Event className="text-[#F98CD5]" link="about/#speech" odd={true}>
          <span>Speech</span>
        </Event>
        <Event className="text-[#E46862]" link="about/#event">
          Event
        </Event>
      </div>
    </div>
  );
}

export default Hero;
