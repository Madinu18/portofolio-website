"use client";
import React from "react";
import ImgWithEffectZoom from "./ImgWithEffectZoom";

const SkillsSection = () => {
  return (
    <section
      className="mb-10 bg-black bg-opacity-20 rounded-2xl scroll-mt-24"
      id="skills"
    >
      <div className="text-center p-10">
        <h2 className="text-white mb-6 text-2xl sm:text-4xl font-extrabold">
          SKILLS
        </h2>
        <div className="flex flex-col md:flex-row justify-center mb-0 sm:mb-0">
          <div className="flex flex-wrap justify-center">
            <ImgWithEffectZoom
              src="/img/arduino.png"
              alt="arduino"
              width={100}
              height={100}
              border="rounded-lg"
              color="bg-[#0384fc]"
              gColor="#0288D1"
            />
            <ImgWithEffectZoom
              src="/img/python.png"
              alt="python"
              width={100}
              height={100}
              border="rounded-lg"
              color="bg-[#0384fc]"
              gColor="#0288D1"
            />
          </div>
          <div className="flex flex-wrap justify-center">
            <ImgWithEffectZoom
              src="/img/html.png"
              alt="html5"
              width={100}
              height={100}
              border="rounded-lg"
              color="bg-[#0384fc]"
              gColor="#0288D1"
            />
            <ImgWithEffectZoom
              src="/img/css.png"
              alt="css3"
              width={100}
              height={100}
              border="rounded-lg"
              color="bg-[#0384fc]"
              gColor="#0288D1"
            />
          </div>
          <div className="flex flex-wrap justify-center">
            <ImgWithEffectZoom
              src="/img/javascript.png"
              alt="javascript"
              width={100}
              height={100}
              border="rounded-lg"
              color="bg-[#0384fc]"
              gColor="#0288D1"
            />
            <ImgWithEffectZoom
              src="/img/google-cloud.png"
              alt="GCP"
              width={100}
              height={100}
              border="rounded-lg"
              color="bg-[#0384fc]"
              gColor="#0288D1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
