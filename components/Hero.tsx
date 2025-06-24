import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between lg:px-20 px-6 md:px-5 py-12 bg-white mx-0 md:mx-20 lg:mx-10">
      {/* Kiri: Teks */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          We manage your IT, <br /> so you can manage your business.
        </h1>
        <p className="text-gray-600 text-[23] leading-[1.5]">
          Kami adalah tim profesional yang berpengalaman dalam bidang IT,
          Membantu perusahaan dalam mengembangkan website atau mobile app untuk
          tumbuh lebih besar
        </p>
        <div className="flex gap-4">
          <Link href="#services">
            <Button
              variant="default"
              className="bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Explore Now
            </Button>
          </Link>
          <a href="https://drive.google.com/file/d/19g0wKebv4XQbApb-8X7O3gtstoNbmFlv/view?usp=sharing" target="_blank" download>
            <Button variant="ghost" className="group">
              My Portfolio{" "}
              <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>

      {/* Kanan: Gambar */}
      <div className="md:w-1/2 mt-10 md:mt-0">
        <div className="hero-clip w-full h-[400px] md:h-[500px] overflow-hidden shadow-lg">
          <Image
            width={600 * 2}
            height={400 * 2}
            src="/assets/hero.png"
            alt="Office team"
            priority // Penting untuk LCP
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
