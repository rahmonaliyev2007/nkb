import Link from "next/link";

export default function Navbar() {
 
  return (
    <nav  className="sticky top-0 z-[9999] w-full backdrop-blur-sm py-5 bg-black/20 border-b border-b-white/40">
      <div className="flex justify-between items-center max-w-[1240px] px-4 mx-auto">
        <div>
          <Link href="/" className="text-2xl text-white"> NKB</Link>
        </div>
        <ul className="flex items-center gap-6 text-white"> 
          <li className="after:content['']">
            <button className="cursor-pointer hover:underline"  onClick={()=> document.getElementById('hero').scrollIntoView({ behavior: "smooth" })}>Bosh Sahifa</button>
          </li>   
          <li>
            <button  className="cursor-pointer hover:underline" onClick={()=> document.getElementById('about').scrollIntoView({ behavior: "smooth" })}>Biz Haqimizda</button>
          </li> 
          <li>
            <button className="cursor-pointer hover:underline"  onClick={()=> document.getElementById('contact').scrollIntoView({ behavior: "smooth" })}>Aloqa</button>
          </li>  
        </ul>
      </div>
    </nav>
  );
}