import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Landing Page Profesional",
    price: "Mulai dari Rp 600 Ribu",
    discount: "Rp 420,000",
    perbulan: "*konversi perbulan: Rp. 35.000",
    features: [
      "1 Halaman Landing Page",
      "Desain Mobile-Friendly",
      "Call to Action (CTA) WhatsApp",
      "Integrasi Media Sosial",
      "Basic SEO (Meta tag + Struktur heading)",
      "Hosting & Domain Gratis 1 Tahun",
    ],
    image: "/assets/service-1.png",
  },
  {
    id: 2,
    title: "Web Custom",
    price: "Mulai dari Rp 5 Juta",
    discount: "Rp 3,000,000",
    perbulan: "*konversi perbulan: Rp. 250.000",
    features: [
      "Desain Mobile-Friendly",
      "Call to Action (CTA) WhatsApp",
      "Integrasi Media Sosial",
      "Basic SEO (Meta tag + Struktur heading)",
      "Hosting & Custom Domain Gratis 1 Tahun",
      "Google Analytics + Facebook Pixel",
      "1x Revisi Desain",
    ],
    image: "/assets/service-2.png",
  },
  {
    id: 3,
    title: "Mobile Apps",
    price: "Mulai Rp 5 Juta",
    discount: false,
    perbulan: false,
    features: [
      "Analisa Kebutuhan & Konsultasi Gratis",
      "Desain UI/UX Profesional",
      "Pengembangan Aplikasi (Android/iOS)",
      "Fitur-Fitur Aplikasi yang Bisa Anda Pilih",
      "Dashboard Admin",
      "Testing & Quality Assurance",
      "Publikasi & Support",
    ],
    image: "/assets/service-3.png",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="mx-0 lg:mx-10 my-10 lg:px-10 md:px-5 px-2"
    >
      <div className="bg-[#F5FAFF] py-12 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A]">
            ✨ Solusi Digital untuk{" "}
            <span className="text-[#0F172A]">Setiap Jenis Bisnis</span>
          </h2>
          <p className="text-[#475569] mt-2 text-lg">
            Pilih layanan yang sesuai dan mulai skalakan bisnismu sekarang!
          </p>
        </div>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-2xl rounded-2xl overflow-hidden mt-6 mb-3 pt-0 pb-0"
            >
              <div className="relative w-full h-68">
                <div
                  className={`absolute ${
                    service.id == 1 ? "bg-yellow-400 text-black" : ""
                  } ${
                    service.id == 2 ? "bg-green-600 text-white" : ""
                  }  mx-2 my-2 text-sm font-semibold px-3 py-1 rounded-full mb-4 z-10`}
                >
                  {service.id == 1
                    ? "BEST VALUE"
                    : service.id == 2
                    ? "PALING POPULER"
                    : ""}
                </div>
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
                  <div
                    className={`text-sm ${
                      service.id == 1 ? "text-orange-600" : ""
                    } ${
                      service.id == 2 ? "text-green-600" : ""
                    }  font-semibold mb-4`}
                  >
                    {/* {service.price} */}
                    <p
                      className={`text-sm text-gray-500 ${
                        service.discount !== false ? "line-through" : ""
                      } `}
                    >
                      {service.price}
                    </p>
                    {service.discount === false ? (
                      ""
                    ) : (
                      <>
                        <p className="text-3xl font-bold text-red-600">
                          {service.discount}{" "}
                          <span className="text-base font-normal text-gray-600">
                            / Tahun
                          </span>
                        </p>
                        <p className="text-xs text-gray-500">
                          {service.perbulan}
                        </p>
                      </>
                    )}
                  </div>
                </div>
                <ul className="text-sm space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CircleCheck
                        className={`${
                          service.id == 1 ? "text-orange-600" : "text-blue-600"
                        } ${
                          service.id == 2 ? "text-green-600" : "text-blue-600"
                        }`}
                      />{" "}
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
