import Image from "next/image";
import Container from "../ui/container";
import Process from "./process";

const CountAchievement = () => {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-7xl rounded-tl-3xl rounded-br-3xl bg-[#06063E] relative px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between">
          <div className="text-white space-y-1 py-6 md:py-8 lg:py-10 text-center relative">
            <Image
              src={"/Layer 2.png"}
              alt="Car"
              width={176}
              height={115}
              className="absolute w-[100px] h-[65px] bottom-24 lg:bottom-28 lg:right-20 xl:w-32 xl:h-20 right-6"
            />
            <h3 className="text-2xl md:text-2xl xl:text-[40px]">5000 +</h3>
            <p className="text-lg md:text-xl xl:text-2xl">Biler solgt</p>
          </div>
          <div className="text-white space-y-2 py-4 md:py-8 lg:py-10 text-center">
            <h3 className="text-2xl md:text-2xl xl:text-[40px]">500 +</h3>
            <p className="text-lg md:text-xl xl:text-2xl">Kjøpere registrert</p>
          </div>
          <div className="text-white space-y-2 py-4 md:py-8 lg:py-10 text-center">
            <h3 className="text-2xl md:text-2xl xl:text-[40px]">30,000+</h3>
            <p className="text-lg md:text-xl xl:text-2xl">Innkommende bud</p>
          </div>
          <div className="text-white space-y-2 py-4 md:py-8 lg:py-10 text-center">
            <h3 className="text-2xl md:text-2xl xl:text-[40px]">5000+</h3>
            <p className="text-lg md:text-xl xl:text-2xl">Fornøyde selgere</p>
          </div>
        </div>
        <div className="mt-10 md:mt-20 text-center">
          <h1 className="text-[#06063E] text-xl md:text-2xl lg:text-3xl font-medium">
            Vi hjelper deg med å selges din bil!
          </h1>
          <h3 className="text-[#FF003D] md:text-xl lg:text-3xl font-medium mt-4">
            Trygt og enkelt
          </h3>
          <h3 className="text-base md:text-lg mt-10 uppercase font-semibold">
            <span className="text-[#FF003D]">Hvordan fungerer</span>{" "}
            <span className="text-navyblue">nETTAUTO.NO</span>
          </h3>
        </div>
      </Container>
      <div className="bg-navyblue mt-52">
        <Container className="grid grid-cols-1 md:grid-cols-2 md:gap-x-8 xl:grid-cols-4 px-5 gap-y-28 xl:gap-y-0 xl:gap-x-8">
          {[
            {
              id: 1,
              title: "FORTELL OSS OM DIN BIL",
              description:
                "Du lager enkelt en auksjon. Last opp bilder, legger inn beskrivelse og informasjon. Velg så en ønsket, men realistisk pris for gjenstanden og send auksjonen til godkjenning.",
              image: "/guy-with-car.svg",
            },
            {
              id: 2,
              title: "Vi GÅR GJENNOM ANNONSEN",
              description:
                "Auksjonsrådgiver går gjennom annonsen og eventuelt justere denne for at du skal oppnå så høyt bud som mulig. Hvis vi trenger flere bilder eller mer utfyllende informasjon så tar vi kontakt med deg.",
              image: "/leads-amico.svg",
            },
            {
              id: 3,
              title: "Auksjonen starter",
              description:
                "Etter godkjenning starter auksjonen, du kan følge med på Min side",
              image: "/Auction-pana.svg",
            },
            {
              id: 4,
              title: "AUKSJONEN AVSLUTTES",
              description:
                "Etter endt auksjon, kan du velge og godta bud eller avslå. Om bud godtaes så betales salgsummen til vår klientkonto før utleveringsbevis sendes til kjøper. Så utbetaler vi til selger.",
              image: "/Vehicle Sale-bro.svg",
            },
          ].map((item) => (
            <Process key={item.id} {...item} />
          ))}
        </Container>
      </div>
    </section>
  );
};

export default CountAchievement;
