import CursorEffect, { OrbitingCirclesDemo } from "./Hero2";
import { TextAnimate } from "./magicui/text-animate";

export default function Hero() {
    
    return (
        <header className="h-[90vh] flex justify-between relative">
            <div className="w-[100%] relative z-10">
                <TextAnimate id="hero" once startOnView={true} animation="slideUp" by="word" duration={1.4} className="text-center text-gray-100 font-bold text-7xl pt-32 max-w-[1240px] m-auto px-4 opacity-100">
                    {`Biznesga yo‘naltirilgan buxgalteriya va soliq xizmatlari`}
                </TextAnimate>

                <TextAnimate id="subtitle1" delay={2} duration={0.7} once startOnView={true} animation="slideUp" by="word" className="text-center text-gray-200 pt-10 font-medium text-2xl max-w-[1240px] m-auto px-4 opacity-100">
                    {`Biznesingiz muvaffaqiyati uchun ishonchli moliyaviy yechimlar.`}
                </TextAnimate>

                <TextAnimate id="subtitle2"  once startOnView={true} delay={3} animation="fadeIn" by="line" as="p" duration={1} className="text-center text-gray-200 pt-5 font-medium text-2xl max-w-[1240px] m-auto px-4 opacity-100">
                    {`Biznesingiz moliya boshqaruvida mutaxassis buxgalterlar jamoasi \n\n va oliy toifali soliq agenti bilan ko‘maklashamiz`}
                </TextAnimate>
            </div>
            {/* <CursorEffect/> */}
        </header>
    );
}
