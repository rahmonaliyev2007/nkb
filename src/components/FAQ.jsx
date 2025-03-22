import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
    const accordionData = [
        { id: "item-1", question: "Kompaniyangiz qaysi sohada faoliyat yuritadi?", answer: "Biz [soha nomi] yo‘nalishida xizmat ko‘rsatamiz va mijozlarga sifatli mahsulot va yechimlarni taqdim etamiz." },
        { id: "item-2", question: "Xizmatlaringizdan qanday foydalanish mumkin?", answer: "Mijozlarimiz biz bilan bog‘lanish orqali xizmatlarimiz haqida batafsil ma’lumot olishlari va buyurtma berishlari mumkin." },
        { id: "item-3", question: "Sizning afzalliklaringiz nimada?", answer: "• Ishonchli va tajribali mutaxassislar\n• Sifatli mahsulotlar va xizmatlar\n• Mijozlarga individual yondashuv\n• Texnologik innovatsiyalar" },
        { id: "item-4", question: "Professional xizmatlar", answer: "Bizning mutaxassislarimiz yuqori darajadagi tajribaga ega va har bir mijoz uchun individual yechimlar taklif qiladi." },
        { id: "item-5", question: "Sifat kafolati", answer: "Mahsulot va xizmatlarimiz sifat standartlariga mos keladi va uzoq muddatli kafolat bilan ta’minlanadi." },
        { id: "item-6", question: "Mijozlar ehtiyojiga mos yondashuv", answer: "Biz har doim mijozlarimiz talab va ehtiyojlarini inobatga olib, ularga eng yaxshi xizmatni taklif qilamiz." },
        { id: "item-7", question: "Yetkazib berish xizmatlari mavjudmi?", answer: "Ha, biz mahsulot va xizmatlarimizni yetkazib berish xizmatini taklif qilamiz." },
        { id: "item-8", question: "To‘lov usullari qanday?", answer: "Biz naqd, kartalar va onlayn to‘lov tizimlari orqali to‘lov qabul qilamiz." },
       ];

    return (
        <div id="contact" className="max-w-[1240px] mx-auto my-10 p-6 bg-black/60 border-2 border-white/10 text-gray-200 rounded-lg">
            <h2 className="text-3xl text-center uppercase font-bold mb-6">Ko‘p so‘raladigan savollar</h2>
            <Accordion type="single" collapsible>
                {accordionData.map((item) => (
                    <AccordionItem key={item.id} value={item.id} className="border-b border-white/10">
                        <AccordionTrigger className="text-xl font-semibold px-4 py-3  hover:bg-white/10 rounded-lg transition-all">
                            {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="p-4 text-gray-300">
                            {item.answer.split("\n").map((line, index) => (
                                <p key={index} className="mb-2">{line}</p>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
