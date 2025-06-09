import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Analytix Dashboard",
    category: "Landing Page • Dashboard",
    rating: 5,
    description:
      // "Landing Page SaaS Analytic adalah solusi desain responsif dan elegan untuk mempromosikan layanan analitik berbasis cloud. Dibangun dengan tampilan yang clean, interaktif, dan user-friendly, template ini cocok untuk startup, bisnis SaaS, atau agensi digital yang ingin menonjolkan fitur analitik, keunggulan produk, serta konversi pengunjung.",
      "Promosikan Layanan Analitikmu dengan Tampilan Modern & Responsif. Cocok untuk SaaS, startup, dan agensi digital.",
    image: "/assets/proyek-1.png",
    person: {
      name: "Mumu",
      role: "Designer at HRIS",
      avatar: "/images/mumu.png",
    },
    link: "https://landing-page-saas-analytic.vercel.app",
  },
  {
    title: "Elevalte AI Management",
    category: "Artificial Intelligence • Landing Page",
    rating: 5,
    description:
      // "Techno Gear SaaS adalah landing page modern yang dirancang untuk mempromosikan solusi teknologi atau alat berbasis SaaS (Software as a Service) dengan nuansa futuristik dan tech-driven. Desainnya menonjolkan kesan inovatif, cocok untuk produk digital seperti tool manajemen, automasi, atau platform IT.",
      "Tampilkan Produk SaaS-mu dengan Gaya Futuristik & Inovatif. Ideal untuk platform teknologi, automasi, dan manajemen.",
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
      // "FinWise adalah sebuah landing page modern yang dirancang khusus untuk layanan keuangan, fintech, atau aplikasi manajemen keuangan pribadi berbasis SaaS. Dengan desain yang clean dan profesional, template ini sangat cocok untuk mempromosikan solusi keuangan digital, investasi, atau alat perencanaan finansial.",
      "Solusi Finansial Digital Butuh Tampilan Profesional. FinWise hadir untuk fintech, investasi, dan aplikasi keuangan.",
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
    <section id="porfolio" className="mx-0 md:mx-20 lg:mx-10 my-10">
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

                <p className="text-gray-700 leading-relaxed text-justify">
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
