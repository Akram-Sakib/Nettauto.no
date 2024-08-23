import headerNavLinks from "@/data/constants";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className={`w-full sticky z-30 top-0 flex items-center justify-between py-6 border-b border-[#E3E3E3] bg-opacity-30 backdrop-filter backdrop-saturate-150 backdrop-blur-lg firefox:bg-opacity-100 bg-gradient-to-r from-[#F8FCFF] to-[#DBF4FF]`}
    >
      <nav className="flex items-center justify-between w-full px-4 mx-auto sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
        <div>
          <Image src={"/logo.png"} alt="Logo" width={400} height={57} />
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block sm:space-x-8">
            {/* text-gray-700 dark: */}
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                title={link.title}
                href={link.href}
                className={`font-medium text-gray-700 hover:text-[#E50000] text-lg`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center sm:hidden"></div>
        </div>
        <div className="flex items-center text-base leading-5">
          <div className="hidden sm:block sm:space-x-8 text-white">
            <button className="w-[149px] h-[46px] rounded bg-[#06063E]">
              Logg inn
            </button>
            <button className="w-[149px] h-[46px] rounded bg-[#FF003D]">
              Registerer deg
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
