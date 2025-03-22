import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 mt-20 border-t border-white/10">
            <div className="max-w-[1240px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Xizmatlar</h2>
                    <ul className="space-y-2 text-white/70">
                        <li><Link href="#">Buxgalteriya Hisoboti</Link></li>
                        <li><Link href="#">Soliq Konsultatsiyasi</Link></li>
                        <li><Link href="#">Moliyaviy Tahlil</Link></li>
                        <li><Link href="#">Audit Xizmati</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Bog'lanish</h2>
                    <p className="text-white/70">📍 Toshkent, O‘zbekiston</p>
                    <p className="text-white/70">📞 +998 90 123 45 67</p>
                    <p className="text-white/70">✉️ info@example.com</p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Biz bilan bog‘laning</h2>
                    <div className="flex space-x-4 text-2xl">
                        <Link href="#"><FaFacebook className="hover:text-blue-500 transition" /></Link>
                        <Link href="#"><FaInstagram className="hover:text-pink-500 transition" /></Link>
                        <Link href="#"><FaTelegram className="hover:text-blue-400 transition" /></Link>
                        <Link href="#"><FaTwitter className="hover:text-blue-300 transition" /></Link>
                    </div>
                </div>
            </div>
            <div className="text-center text-white/60 mt-10 border-t border-white/10 pt-6">
                <p>&copy; {new Date().getFullYear()} Barcha huquqlar himoyalangan.</p>
            </div>
        </footer>
    );
}
