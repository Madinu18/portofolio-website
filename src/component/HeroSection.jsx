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
                "Web Developer",
                1000,
                "Data Enthusiast",
                1000,
                "IoT Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I am an electrical engineering{" "}
            <span className="font-bold">fresh graduate</span>. Enjoy learning a
            new things and have a strong understanding of coding skills.
            Additionally, I am familiar with using{" "}
            <span className="font-bold">Git</span>. I am more of a{" "}
            <span className="font-bold">team player</span> but can also work
            effectively <span className="font-bold">independently</span>. You
            can know me more through my{" "}
            <span className="font-bold">LinkedIn</span> or you can follow my
            coding journey through my <span className="font-bold">Github</span>.
            Currently <span className="font-bold">looking for a job</span> so if you interest to <span className="font-bold">recruit me</span> freely
            to contact me using this website or through <span className="font-bold">my LinkedIn</span>
          </p>
          {/* <div>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-tr from-[#163020] via-[#304D30] to-[#4E9F3D] hover:bg-slate-20 text-white">
                Hire Me
                </button>
                <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-transparant hover:bg-slate-800 text-white border border-white mt-3">
                Download CV
                </button>
            </div> */}

          <div className="flex justify-center sm:justify-start mb-2 sm:mb-0">
            <ImageWithEffect
              href="https://www.linkedin.com/in/madinurhidayat/"
              src="/linkedin(1).svg"
              alt="Image 1"
              width={70}
              height={70}
              border="rounded-lg"
              color="bg-[#0384fc]"
              gColor="#0288D1"
            />
            <ImageWithEffect
              href="https://github.com/Madinu18"
              src="/github.png"
              alt="Image 1"
              width={70}
              height={70}
              border="rounded-full"
              color="bg-[#ffffff]"
              gColor="#ffffff"
            />
            {/* <Image
                className="filter grayscale hover:filter-none transition duration-300 border-none"
                src="/linkedin(1).svg"
                alt="linkedin-icon"
                width={100}
                height={100}
                style={{ boxShadow: "box-shadow: 10px 5px 5px red" }}
                onMouseOver={(e) =>
                    (e.currentTarget.style.boxShadow = "10px 0 50px #0288D1")
                }
                onMouseOut={(e) =>
                    (e.currentTarget.style.boxShadow = "0 0 0 transparent")
                }
                /> */}
            {/* <Image
                src="/github.png"
                alt="linkedin-icon"
                width={100}
                height={100}
                /> */}
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 justify-center">
          <Image
            className="rounded-full relative w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]"
            src="/profile-website.png"
            alt="profile"
            width={1000}
            height={1000}
          />
          {/* <div className="rounded-full bg-[#1E5128] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <Image className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full" src="/profile-website.png" alt="profile" width={300} height={300} />
                    </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
