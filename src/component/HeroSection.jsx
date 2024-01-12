"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import ImageWithEffect from "./ImgWithEffect";

const HeroSection = () => {
  return (
    <section className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#1bfd9c] via-[#9ffd32] to-[#194000]">
              Hello I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "M Adi Nurhidayat",
                2500,
                "Electrical Engineer",
                1000,
                "Web Developer",
                1000,
                "Data Enthusiast",
                1000,
                "IoT Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am a <span className="font-bold">fresh graduate</span> in
            electrical engineering, with a passion for learning new things and a
            strong understanding of coding skills. Additionally, I am familiar
            with using <span className="font-bold">Git</span>. I am more of a{" "}
            <span className="font-bold">team player</span> but can also work
            effectively <span className="font-bold">independently</span>. You
            can learn more about me through my{" "}
            <span className="font-bold">LinkedIn profile</span>, or you can
            follow my coding journey on{" "}
            <span className="font-bold">my GitHub</span>. I am currently looking
            for a <span className="font-bold">job</span>, so if you are
            interested in <span className="font-bold">recruiting me</span>, feel
            free to contact me through{" "}
            <span className="font-bold">this website</span> or via{" "}
            <span className="font-bold">my LinkedIn</span>.
          </p>
          <div className="flex justify-center sm:justify-start mb-2 sm:mb-0">
            <ImageWithEffect
              href="https://www.linkedin.com/in/madinurhidayat/"
              src="/img/linkedin.svg"
              alt="Image 1"
              width={60}
              height={60}
              border="rounded-lg"
              color="bg-[#0384fc]"
              gColor="#0288D1"
            />
            <ImageWithEffect
              href="https://github.com/Madinu18"
              src="/img/github.png"
              alt="Image 1"
              width={60}
              height={60}
              border="rounded-full"
              color="bg-[#ffffff]"
              gColor="#ffffff"
            />
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 justify-center">
          <Image
            className="rounded-full relative w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]"
            src="/img/profile-website.png"
            alt="profile"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
