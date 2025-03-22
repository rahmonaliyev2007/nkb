import { BorderBeam } from "./magicui/border-beam";
import { TextAnimate } from "./magicui/text-animate";

export default function About() {
    return (
        <div>
            <TextAnimate once id="about" delay={0.7} startOnView={true} animation="slideUp" by="line" duration={0.4} className="text-4xl text-center font-bold opacity-100 mt-10">
                {`Biz Haqimizda`}
            </TextAnimate>
            <hr className="border-none bg-white/90 rounded h-[3px] mt-4 mb-10 w-[30%] m-auto" />
            <div className="max-w-[1240px] rounded-lg relative text-white m-auto overflow-hidden bg-black/60 border-2 border-white/10">
                <div className="relative z-10 p-4 flex flex-col md:flex-row justify-between gap-4">
                    <div className="w-full md:w-1/3 text-xl text-gray-200 border-2 border-white/10 rounded p-4 text-justify">
                        <span className="text-2xl">BEK DUR SERVIS</span> – zamonaviy, ishonchli va innovatsion kompaniya bo‘lib, [yil] yildan beri [soha nomi] yo‘nalishida muvaffaqiyatli faoliyat yuritib kelmoqda. Kompaniyamizning asosiy maqsadi – mijozlarimizga yuqori sifatli xizmat va mahsulotlarni taqdim etish orqali ularning ehtiyojlarini qondirishdir.
                    </div>

                    <div className="w-full md:w-2/3 p-4 border-2 border-white/10 overflow-hidden rounded flex flex-col md:flex-row gap-4 relative">
                        <div className="group relative w-full md:w-[48%] transition-all duration-500 hover:w-[65%] hover:z-10 flex items-center">
                            <div className="overflow-hidden rounded-lg w-1/2 transition-all duration-500 group-hover:w-2/3">
                                <img
                                    className="object-cover w-full h-40 transition-all duration-500 group-hover:h-56 group-hover:scale-110"
                                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                                    alt="Team Member"
                                />
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-1/2 pl-4">
                                <h3 className="text-lg font-bold text-white">Name Surname</h3>
                                <p className="text-gray-300">Status</p>
                                <p className="text-gray-300">Staj</p>
                                <p className="text-gray-300">Rank</p>
                            </div>
                        </div>

                        <div className="group relative w-full md:w-[48%] transition-all duration-500 hover:w-[85%] hover:z-10 flex items-center md:group-hover:translate-x-[150%]">
                            <div className="overflow-hidden rounded-lg w-1/2 transition-all duration-500 group-hover:w-2/3">
                                <img
                                    className="object-cover w-full h-40 transition-all duration-500 group-hover:h-56 group-hover:scale-110"
                                    src="https://c4.wallpaperflare.com/wallpaper/461/209/170/regression-4k-cool-pc-wallpaper-preview.jpg"
                                    alt="Team Member"
                                />
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-1/2 pl-4">
                                <h3 className="text-lg font-bold text-white">Name Surname</h3>
                                <p className="text-gray-300">Status</p>
                                <p className="text-gray-300">Staj</p>
                                <p className="text-gray-300">Rank</p>
                            </div>
                        </div>
                    </div>
                </div>
                <BorderBeam duration={8} size={200} />
            </div>
        </div>
    );
}