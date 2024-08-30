"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuButton from "./menu-button";
import { headerNavLinks } from "@/data/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// function useIsScrollTop() {
//   const [isTop, setIsTop] = useState(true);
//   useEffect(() => {
//     function onScroll() {
//       setIsTop(window.scrollY <= 0);
//     }
//     window.addEventListener("scroll", onScroll);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   return isTop;
// }

function useToggleMenu() {
  const [menuShow, setMenuShow] = useState(false);
  const onMenuToggle = () => {
    setMenuShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };
  return [menuShow, onMenuToggle] as const;
}

export default function Navbar() {
  const [menuShow, onMenuToggle] = useToggleMenu();
  // const isTop = useIsScrollTop();

  const pathname = usePathname();

  return (
    <>
      <header
        className={`w-full sticky z-30 top-0 flex items-center justify-between py-6 border-b border-[#E3E3E3] bg-opacity-30 backdrop-filter backdrop-saturate-150 backdrop-blur-lg firefox:bg-opacity-100 bg-gradient-to-r from-[#DBF4FF] to-[#F8FCFF]`}
      >
        <nav className="flex items-center justify-between w-full px-4 mx-auto lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt="Logo"
              width={400}
              height={57}
              className="w-[180px] h-[30px] md:w-[200px] md:h-[35px] xl:w-[400px] xl:h-[57px]"
            />
          </Link>
          <div className="flex items-center text-base leading-5">
            <div className="hidden md:block md:space-x-4 lg:space-x-8">
              {/* text-gray-700 dark: */}
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  title={link.title}
                  href={link.href}
                  className={cn(
                    `font-medium font-roboto text-gray-700 hover:text-[#E50000] text-sm md:text-base lg:text-lg`,
                    pathname === link.href && "text-[#E50000] font-semibold"
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex items-center md:hidden">
              <MenuButton onClick={onMenuToggle} isOpened={menuShow} />
            </div>
          </div>
          <div className="hidden md:flex items-center md:text-sm font-bold lg:text-base leading-5">
            <div className="md:space-x-4 sm:space-x-2 lg:space-x-8 text-white">
              <Link
                href="/login"
                className="lg:px-8 px-2 md:py-2 lg:py-3 rounded bg-[#06063E]"
              >
                Logg inn
              </Link>
              <Link
                href="/new-register"
                className="lg:px-8 px-2 md:py-2 lg:py-3 rounded bg-[#FF003D]"
              >
                Registerer deg
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`sm:hidden fixed w-full h-screen right-0 bg-white dark:bg-black z-20 transform ease-in-out duration-500 ${
          menuShow ? "translate-x-0" : " -translate-x-full"
        } backdrop-filter bg-opacity-30 dark:bg-opacity-30 backdrop-saturate-150 backdrop-blur-lg firefox:bg-opacity-100 dark:firefox:bg-opacity-100 z-30`}
      >
        <nav className="h-full mt-8 space-y-8">
          {headerNavLinks.map((link) => (
            <div key={link.title} className="px-12">
              <Link
                href={link.href}
                title={link.title}
                className="text-xl font-semibold leading-8 tracking-wide text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                onClick={onMenuToggle}
              >
                {link.title}
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
