import { useState } from "react";

const servicesData = [
    { title: "Soliq hisobi", description: "Kompaniyangiz uchun soliqlarni to‘g‘ri hisoblash va deklaratsiya qilish." },
    { title: "Moliyaviy audit", description: "Moliyaviy hujjatlaringizning to‘g‘riligi va shaffofligini tekshirish." },
    { title: "Ish haqi hisob-kitobi", description: "Xodimlaringiz uchun ish haqi va bonuslarni aniq hisoblash." },
    { title: "Kredit tahlili", description: "Bank kreditlari bo‘yicha maslahat va hujjat tayyorlash." },
    { title: "Buxgalteriya xizmatlari", description: "To‘liq buxgalteriya yuritish va moliyaviy hisobot tayyorlash." },
    { title: "Biznes reja tuzish", description: "Yangi biznesingiz uchun strategik reja va moliyaviy tahlil." },
    { title: "Investitsiya tahlili", description: "Investitsiya loyihalarini baholash va tavsiyalar berish." },
    { title: "Kredit qaytarish strategiyasi", description: "Kreditlarni o‘z vaqtida to‘lash rejasini ishlab chiqish." },
    { title: "Xalqaro moliyaviy hisob", description: "Xalqaro moliyaviy standartlarga mos hisobot yuritish." },
    { title: "Bank operatsiyalarini yuritish", description: "Bank hisoblaringizni boshqarish va operatsiyalarni kuzatish." },
    { title: "Sug‘urta xizmatlari", description: "Biznesingiz uchun eng yaxshi sug‘urta rejasini tanlash." },
    { title: "Xodimlar soliqlari", description: "Xodimlar uchun soliqlar va imtiyozlarni to‘g‘ri hisoblash." },
    { title: "Moliyaviy strategiya", description: "Biznesingiz uchun moliyaviy reja va yo‘nalishlar." },
    { title: "Daromad va chiqim nazorati", description: "Biznesingizning daromad va xarajatlarini optimallashtirish." },
    { title: "Qo‘shilgan qiymat solig‘i (QQS)", description: "QQS hisob-kitobi va to‘lov jarayonlarini yuritish." },
    { title: "Hisob-kitob va balans", description: "Kompaniyaning moliyaviy balansini tayyorlash va yuritish." },
    { title: "Xarajatlar tahlili", description: "Biznesingiz uchun eng samarali xarajat rejasini ishlab chiqish." },
    { title: "Import-eksport hisoboti", description: "Xalqaro savdo uchun moliyaviy hisobotlarni yuritish." },
    { title: "Biznes optimizatsiyasi", description: "Biznes jarayonlaringizni samarali boshqarish va takomillashtirish." }
];

export default function Services() {
    const [showAll, setShowAll] = useState(false);
    const visibleServices = showAll ? servicesData : servicesData.slice(0, 6);

    return (
        <div className="max-w-[1240px] mx-auto py-10 text-white">
            <h2 className="text-4xl font-bold text-center mb-6">Bizning xizmatlarimiz</h2>
            <hr className="border-none bg-white/90 rounded h-[3px] mb-6 w-[30%] m-auto" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleServices.map((service, index) => (
                    <div key={index} className="group border border-white/10 p-5 rounded-lg bg-black/60 transition-all duration-500 hover:bg-white/10 hover:scale-105">
                        <h3 className="text-xl font-semibold mb-2 ">{service.title}</h3>
                        <p className="text-gray-300">{service.description}</p>
                    </div>
                ))}
            </div>
            <div className="text-center mt-8">
                <button 
                    className="px-6 py-2 border border-white/20 bg-black/60 rounded-md text-white hover:bg-white/20 transition-all duration-300"
                    onClick={() => setShowAll(!showAll)}
                >
                    {showAll ? "Kamroq ko‘rsatish" : "Barcha xizmatlarni ko‘rish"}
                </button>
            </div>
        </div>
    );
}
