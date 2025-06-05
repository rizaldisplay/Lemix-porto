"use client";

import Image from "next/image";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = ["Semua Desain", "Landing Page", "Company Profile", "Toko Online"];

const projects = [
  { title: "Mainan Anak", image: "/assets/proyek1.webp" },
  { title: "Furniture", image: "/assets/proyek2.webp" },
  { title: "Elektronik", image: "/assets/proyek3.webp" },
  { title: "Konsultan", image: "/assets/proyek4.webp" },
  { title: "Industri Manufaktur", image: "/assets/proyek5.webp" },
];

export default function ProjectPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 items-center justify-between">
      {/* Tab Kategori */}
      <Tabs defaultValue="Semua Desain" className="mb-8 text-center">
        <TabsList className="flex justify-center gap-4 flex-wrap bg-gray-100 rounded-lg p-1">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Grid Project */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <Card key={idx} className="overflow-hidden shadow-md group hover:shadow-lg transition pt-0 pb-0">
            <CardContent className="p-0">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-medium text-gray-800 group-hover:text-primary transition">
                  {project.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-10 flex justify-center items-center gap-2 text-sm text-gray-600">
        {[1, 2, 3].map((page) => (
          <Button
            key={page}
            variant="ghost"
            size="sm"
            className="px-3 py-1 rounded-full hover:bg-gray-100"
          >
            {page}
          </Button>
        ))}
        <span className="text-blue-500 cursor-pointer hover:underline">Berikutnya »</span>
      </div>
    </section>
  );
}