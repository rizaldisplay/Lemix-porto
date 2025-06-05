import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "I do design and code for better quality",
  "I do value teamwork and leadership",
  "I always start project from research",
  "I validate UX with usability-testing",
  "I always create a documentation",
];

const images = [
  { src: "/assets/reason-1.png", yOffset: "mt-6" },
  { src: "/assets/reason-2.jpg", yOffset: "mb-6" },
  { src: "/assets/reason-3.jpg", yOffset: "mb-8" },
  { src: "/assets/reason-4.jpg", yOffset: "mt-0" },
];


const HowtoWork = () => {
  return (
    <section className="mx-0 md:mx-20 lg:mx-10 my-10 md:px-5">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Images grid with vertical offset */}
        <div className="grid grid-cols-2 gap-4">
          {images.map(({ src, yOffset }, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 ${yOffset}`}
            >
              <Image
                src={src}
                alt={`Reason ${i + 1}`}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        {/* Right: Text and features */}
        <div className="space-y-5">
          <p className="text-sm lg:text-2xl md:text-xl text-gray-500">Reasons Why</p>
          <h2 className="text-2xl font-bold leading-snug">
            I Might Great <br />
            For Your Business
          </h2>
          <ul className="space-y-3">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 w-5 h-5 mt-1" />
                <span className="text-gray-700 text-sm md:text-base lg:text-lg">{item}</span>
              </li>
            ))}
          </ul>
          <Button className="bg-blue-600 hover:bg-blue-700">Explore Now</Button>
        </div>
      </div>
    </section>
  );
};

export default HowtoWork;
