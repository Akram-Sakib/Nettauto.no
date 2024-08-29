import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { Input } from "./input";

const Footer = () => {
  return (
    <section className="relative text-white">
      <div
        className="w-full h-full bg-gradient-to-r from-[#070756] to-[#0B5F7C] absolute -z-10 "
        style={{
          clipPath: "polygon(0 20%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:justify-between pt-60 pb-20 gap-x-10">
        <div>
          <Image
            src={"/white-logo.png"}
            alt="White Logo"
            width={360}
            height={160}
            className="mt-10 lg:h-[160px] lg:w-[365px] w-[150px] h-[70px]"
          />
        </div>
        <div>
          <h1 className="mt-10 lg:mt-0 font-bold text-xl lg:text-3xl text-center mb-10 lg:leading-10 font-neulis">
            <span>Det enkleste måten</span> <br />{" "}
            <span className="text-[#FF003D]">å selge bilen på</span>
          </h1>
          <div className="flex gap-x-4 font-roboto">
            <Input
              type="text"
              placeholder="Bilens regnr."
              className="font-inter bg-white border-[#EBEBEB] border-2 rounded py-6 text-[#717171] text-sm lg:text-base"
            />
            <Input
              type="text"
              placeholder="Kilometer"
              className="font-inter bg-white border-[#EBEBEB] border-2 rounded py-6 text-[#717171] text-sm lg:text-base"
            />
          </div>
          <Button className="text-sm lg:text-base bg-[#FF003D] lg:px-60 lg:py-8 rounded-tr-none rounded-bl-none rounded-tl-sm rounded-br-sm mt-6 w-full">
            KOM I GANG
          </Button>
        </div>
        <div className="text-center space-y-10 lg:space-y-20 mt-10 lg:mt-0 ">
          <div className="space-y-2 lg:space-y-5">
            <h3 className="text-4xl font-neulis">Kontakt</h3>
            <p className="text-lg font-roboto">Kontakt oss</p>
          </div>
          <div className="text-lg font-roboto font-light space-y-2 lg:space-y-5">
            <p>support@nettauto.no</p>
            <p>+47 00000000</p>
          </div>
          <div className="text-xl font-semibold space-y-2 lg:space-y-5 font-neulis">
            <h3>Ring oss Man- Fre</h3>
            <h3>kl. 09.00 - 18.00</h3>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-x-11 py-10">
        {[
          {
            title: "Home",
            href: "/home",
          },
          {
            title: "About",
            href: "/about",
          },
          {
            title: "Dealers",
            href: "/dealers",
          },
        ].map((link) => (
          <Link
            key={link.title}
            title={link.title}
            href={link.href}
            className={`font-medium font-roboto text-white hover:text-[#E50000] text-sm lg:text-lg`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Footer;
