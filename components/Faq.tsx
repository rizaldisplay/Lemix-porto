import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-16 mx-0 md:mx-20 lg:mx-10 my-10 md:px-5 px-2">
      <div className="max-w-4xl mx-auto px-4 md:px-0 grid md:grid-cols-2 gap-10">
        {/* Left Column - Heading */}
        <div>
          <p className="text-sm text-muted-foreground">Get To Know Lemix</p>
          <h2 className="text-3xl font-bold mt-2">Frequently Asked Questions</h2>
        </div>

        {/* Right Column - Accordion */}
        <div>
          <Accordion type="single" collapsible defaultValue="item-2" className="space-y-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>Bagaimana cara Lemix bekerja?</AccordionTrigger>
              <AccordionContent>Konsultasi gratis → Deal & Proposal → Desain & Pembuatan → Launching & Support.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Klien perlu mempersiapkan apa saja?</AccordionTrigger>
              <AccordionContent>
               Cukup siapkan deskripsi bisnis, aset visual (logo/gambar), dan referensi jika ada—semua bisa dikirim dalam satu dokumen ringkas (PRD).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Apakah layanan bisa diperpanjang setelah 1 tahun?</AccordionTrigger>
              <AccordionContent>Ya, layanan bisa diperpanjang. Klien hanya perlu membayar biaya domain dan hosting untuk melanjutkan penggunaan website.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Apakah bisa melakukan pembahasan secara offline?</AccordionTrigger>
              <AccordionContent>Bisa. Kami melayani pertemuan langsung di area Malang, Pasuruan, dan Surabaya. Di luar area tersebut, pembahasan bisa dilakukan via Zoom Meeting.</AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Berapa lama proses pengerjaan website?</AccordionTrigger>
              <AccordionContent>Rata-rata waktu pengerjaan adalah 3–7 hari kerja, tergantung kompleksitas desain dan kelengkapan materi dari klien.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}