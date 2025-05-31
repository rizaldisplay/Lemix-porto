import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

const services = [
  {
    title: "Landing Page",
    price: "Mulai Rp 800.000",
    features: ["Website Template", "Gratis Domain dan Hosting 1 Tahun"],
    image: "/assets/service-1.png",
  },
  {
    title: "Web Custom",
    price: "Mulai Rp 3.000.000",
    features: ["Website Template", "Gratis Domain dan Hosting 1 Tahun"],
    image: "/assets/service-2.png",
  },
  {
    title: "Mobile Apps",
    price: "Mulai Rp 4.000.000",
    features: ["Website Template", "Gratis Domain dan Hosting 1 Tahun"],
    image: "/assets/service-3.png",
  },
];

const Services = () => {
  return (
    <section className="mx-0 lg:mx-10 my-10 lg:px-10 md:px-5 px-6">
      <div className="bg-gray-100 rounded-3xl mx-10 py-10 px-6">
        <h2 className="text-center text-3xl font-bold mb-10">
          Menawarkan Jasa
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-2xl rounded-2xl overflow-hidden mt-6 mb-3">
              <div className="relative w-full h-68">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <CardContent className="p-5 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.price}</p>
                </div>
                <ul className="text-sm space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CircleCheck className="text-gray-600" /> {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="default" className="w-full/2 rounded-2xl mx-2 my-4">Pesan</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
