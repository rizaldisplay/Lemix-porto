import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQ() {
  return (
    <section className="bg-white py-16 mx-0 md:mx-20 lg:mx-10 my-10 md:px-5 px-2">
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
              <AccordionContent></AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Klien perlu mempersiapkan apa saja?</AccordionTrigger>
              <AccordionContent>
                Sebelum projek dimulai, baiknya mengirimkan sebuah <strong>Product Requirements Document</strong> yang di dalamnya nanti berisi rincian fitur, harga, dan waktu pengerjaan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Apakah menerima projek jangka panjang?</AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Apakah bisa bekerja dari kantor?</AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Kenapa kami perlu merekrut Shayna?</AccordionTrigger>
              <AccordionContent></AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}