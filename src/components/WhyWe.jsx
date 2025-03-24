import { BorderBeam } from "./magicui/border-beam";
import { TextAnimate } from "./magicui/text-animate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function WhyWe() {
    const reasons = [
        { title: "Sifatli xizmat", description: "Biz mijozlarimizga eng yuqori sifatli xizmatlarni taqdim etamiz." },
        { title: "Tajribali jamoa", description: "Mutaxassislarimiz ko‘p yillik tajribaga ega va o‘z ishining ustalari." },
        { title: "Innovatsion yechimlar", description: "Biz har doim zamonaviy texnologiyalar va innovatsiyalarni joriy qilamiz." },
        { title: "Mijozlarga yo‘naltirilgan yondashuv", description: "Har bir mijoz biz uchun muhim va biz ularning ehtiyojlarini tushunishga harakat qilamiz." },
        { title: "Ishonch va kafolat", description: "Biz mijozlarimizga yuqori darajadagi ishonch va kafolatlar taqdim etamiz." },
        { title: "Hamyonbop narxlar", description: "Xizmatlarimiz va mahsulotlarimiz qulay narxlarda taqdim etiladi." }
    ];

    return (
        <div>
            <TextAnimate once delay={0.7} startOnView={true} animation="slideUp" by="line" duration={0.4} className="text-4xl text-center font-bold opacity-100 mt-[200px]">
                {`Nega Bizni Tanlashingiz Kerak`}
            </TextAnimate>
            <hr className="border-none bg-white/90 rounded h-[3px] mt-4 mb-10 w-[30%] m-auto" />
            <div className="max-w-[1240px] rounded-lg relative text-white m-auto overflow-hidden bg-black/60 border-2 border-white/10 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((reason, index) => (
                    <Card key={index} className="bg-white/10 border border-white/20 text-white">
                        <CardHeader>
                            <CardTitle className="text-xl">{reason.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{reason.description}</p>
                        </CardContent>
                    </Card>
                ))}
            <BorderBeam duration={8} size={200} />
            </div>
        </div>
    );
}
