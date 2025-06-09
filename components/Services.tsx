import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CircleCheck, CornerRightDown } from "lucide-react";

const services = [
  {
    title: "Landing Page",
    price: "Mulai Rp 600.000",
    discount: 50,
    features: ["1 Halaman Landing Page", "Desain Mobile-Friendly", "Call to Action (CTA) WhatsApp", "Integrasi Media Sosial", "Basic SEO (Meta tag + Struktur heading)", "Hosting & Domain Gratis 1 Tahun"],
    image: "/assets/service-1.png",
  },
  {
    title: "Web Custom",
    price: "Mulai Rp 3.000.000 ~ 5.000.000",
    discount: 20,
    features: ["Desain Mobile-Friendly", "Call to Action (CTA) WhatsApp", "Integrasi Media Sosial", "Basic SEO (Meta tag + Struktur heading)", "Hosting & Custom Domain Gratis 1 Tahun", "Google Analytics + Facebook Pixel", "1x Revisi Desain", "Copywriting Dasar (Teks jualan singkat dan menarik)"],
    image: "/assets/service-2.png",
  },
  {
    title: "Mobile Apps",
    price: "Mulai Rp 5.000.000 ~ 10.000.000",
    discount: 0,
    features: ["Analisa Kebutuhan & Konsultasi Gratis", "Desain UI/UX Profesional", "Pengembangan Aplikasi (Android/iOS)", "Fitur-Fitur Aplikasi yang Bisa Anda Pilih", "Dashboard Admin", "Testing & Quality Assurance", "Publikasi & Support"],
    image: "/assets/service-3.png",
  },
];

const Services = () => {
  return (
    <section id="services" className="mx-0 lg:mx-10 my-10 lg:px-10 md:px-5 px-2">
      <div className="bg-gray-100 rounded-3xl mt-2 py-10 px-5">
        <div className="text-center">
          <h1 className="text-center text-3xl font-bold mb-10">
            Digitalin Bisnis Kamu.
          </h1>
          <h2>
            Mulai dari Sini <CornerRightDown />
          </h2>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="shadow-2xl rounded-2xl overflow-hidden mt-6 mb-3 pt-0 pb-0">
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
                {/* <Button variant="default" className="w-full/2 rounded-2xl mx-2 my-4">Pesan</Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
