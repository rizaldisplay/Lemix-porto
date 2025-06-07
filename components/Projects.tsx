import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { link } from "fs";
// import { Star } from "lucide-react";

const projects = [
  {
    title: "Analytix Dashboard",
    category: "Landing Page • Dashboard",
    rating: 5,
    description:
      "Shayna was quick learner to complete the project without having obstacle and I think she was full of experience.",
    image: "/assets/proyek-1.png",
    person: {
      name: "Mumu",
      role: "Designer at HRIS",
      avatar: "/images/mumu.png",
    },
    link: "https://landing-page-saas-analytic.vercel.app",
  },
  {
    title: "Elevalte Ai Management",
    category: "Artificial Intelligence • Landing Page",
    rating: 5,
    description:
      "Shayna was quick learner to complete the project without having obstacle and I think she was full of experience.",
    image: "/assets/proyek-2.png",
    person: {
      name: "Mumu",
      role: "Designer at HRIS",
      avatar: "/images/mumu.png",
    },
    link: "https://techno-gear-saas.vercel.app",
  },
   {
    title: "Finwise Finance App",
    category: "Landing Page",
    rating: 5,
    description:
      "Shayna was quick learner to complete the project without having obstacle and I think she was full of experience.",
    image: "/assets/proyek-3.png",
    person: {
      name: "Mumu",
      role: "Designer at HRIS",
      avatar: "/images/mumu.png",
    },
    link: "https://finwise-mu.vercel.app",
  },
];

const Projects = () => {
  return (
    <section className="mx-0 md:mx-20 lg:mx-10 my-10">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <div>
            <p className="text-sm text-gray-500">Showcase</p>
            <h2 className="text-3xl font-bold">My Best Projects</h2>
          </div>
          <a
            href="#"
            className="flex items-center text-sm font-medium text-black hover:underline"
          >
            View All <ArrowUpRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        <div className="space-y-20">
          {projects.map((project, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
              {/* Project Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Project Description */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold">
                  {project.title}
                </h3>
                <p className="text-blue-700 font-medium">{project.category}</p>

                {/* Stars */}
                {/* <div className="flex text-yellow-500">
                  {Array.from({ length: project.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-500" />
                  ))}
                </div> */}

                <p className="text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-3 pt-4">
                  <a
                    href={project.link}
                    className="flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white flex items-center"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Button>
                  </a>
                </div> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
