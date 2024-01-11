"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A website to showcase my personal information and all the projects I have been working on. Built using Next.js and Tailwind.",
    image: "/projects/portofolio-website.jpg",
    gitUrl: "https://github.com/Madinu18/portofolio-website",
  },
  {
    id: 2,
    title: "Backend API for Carcinamon Community Apps",
    description:
      "Carcinamon Community is an app that connects cancer patients to each other with a feature for toxicity post-detection using ML sentiment analysis. This project is being used as my capstone project in the Bangkit 2023 program.",
    image: "/projects/backend-carcinamon-apps.jpg",
    gitUrl: "https://github.com/Madinu18/Backend-Carcinamon-Comunity-apps",
  },
  {
    id: 3,
    title: "Prototype IoT Smart Lock Door Using RFID",
    description:
      "This is a prototype of an IoT smart lock door system. It uses the ESP32 microcontroller and Codular for building the app. Firebase real-time database is utilized to store the data.",
    image: "/projects/prototype-iot-smartlockdoor-rfid.jpg",
    gitUrl: "https://github.com/Madinu18/IoT-Smart-Door-Lock-Prototype-project",
  },
  {
    id: 4,
    title: "Plant Watering Robot",
    description:
      "This is a line-following robot that has a function for spraying plants. Built using Arduino UNO, infrared sensor, and color sensor.",
    image: "/projects/plant-watering-robot.jpg",
    gitUrl: "https://github.com/Madinu18/Line-Following-Robot-for-Plant-Watering",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);

  return (
    <section className="scroll-mt-24" id="projects">
      <h2 className="text-center text-2xl sm:text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;