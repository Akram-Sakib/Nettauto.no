import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import dynamic from "next/dynamic";
import ContactSection from "../dealers/contact-section";
import Container from "../ui/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import InfoSenterFeature from "./infosenter-feature";

const Map = dynamic(() => import("../map/map"), {
  ssr: false,
});

const accordionData = [
  {
    id: 1,
    title: "How long does it take to post a car?",
    content: "No, posting your car is completely free.",
  },
  {
    id: 2,
    title: "Are there any fees to use the platform?",
    content: "No, posting your car is completely free.",
  },
  {
    id: 3,
    title:
      "Yes. It's animated by default, but you can disable it if you prefer.",
    content: "No, posting your car is completely free.",
  },
  {
    id: 4,
    title: "Lorem Ipsum Dolar",
    content: "No, posting your car is completely free.",
  },
  {
    id: 5,
    title: "Lorem Ipsum Dolar",
    content: "No, posting your car is completely free.",
  },
  {
    id: 6,
    title: "Lorem Ipsum Dolar",
    content: "No, posting your car is completely free.",
  },
  {
    id: 7,
    title: "Lorem Ipsum Dolar",
    content: "No, posting your car is completely free.",
  },
];

const InfoSenterFeatures = () => {
  return (
    <section className="py-32">
      <Container>
        <Tabs defaultValue="location">
          <TabsList className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-y-14 lg:gap-y-32 gap-x-10 border-b-0 mb-20">
            <TabsTrigger
              value="location"
              className="border-b-0 [&>*]:data-[state=active]:font-normal [&>*]:data-[state=active]:bg-primaryred/20"
            >
              <InfoSenterFeature
                imageUrl="/address-svgrepo-com 1.png"
                title="Her finner du oss"
              />
            </TabsTrigger>
            <TabsTrigger
              value="question"
              className="border-b-0 [&>*]:data-[state=active]:font-normal [&>*]:data-[state=active]:bg-primaryred/20"
            >
              <InfoSenterFeature
                imageUrl="/address-svgrepo-com 2.svg"
                title="Vanlig spørsmål og svar"
              />
            </TabsTrigger>
            <TabsTrigger
              value="sheet"
              className="border-b-0 [&>*]:data-[state=active]:font-normal [&>*]:data-[state=active]:bg-primaryred/20"
            >
              <InfoSenterFeature
                imageUrl="/address-svgrepo-com 3.svg"
                title="Vilkår for nettauksjon"
              />
            </TabsTrigger>
            <TabsTrigger
              value="shield"
              className="border-b-0 [&>*]:data-[state=active]:font-normal [&>*]:data-[state=active]:bg-primaryred/20"
            >
              <InfoSenterFeature
                imageUrl="/address-svgrepo-com 4.svg"
                title="Personvern"
              />
            </TabsTrigger>
            <TabsTrigger
              value="pricelist"
              className="border-b-0 [&>*]:data-[state=active]:font-normal [&>*]:data-[state=active]:bg-primaryred/20"
            >
              <InfoSenterFeature
                imageUrl="/address-svgrepo-com 5.svg"
                title="Prisliste"
              />
            </TabsTrigger>
            <TabsTrigger
              value="envelope"
              className="border-b-0 [&>*]:data-[state=active]:font-normal [&>*]:data-[state=active]:bg-primaryred/20"
            >
              <InfoSenterFeature
                imageUrl="/address-svgrepo-com 6.svg"
                title="Skriv til oss"
              />
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="location"
            className="bg-[#F2F2F7] text-navyblue h-[400px] md:h-[600px] lg:h-[800px] rounded-3xl"
          >
            <Map />
          </TabsContent>
          <TabsContent
            value="question"
            className="bg-[#F2F2F7] text-navyblue h-[800px] lg:h-[1200px] rounded-3xl p-4 md:p-10 lg:p-20 "
          >
            <h3 className="text-center font-bold text-4xl">
              FAQ -{" "}
              <span className="text-primaryred">Ofte stilte spørsmål</span>
            </h3>
            <Accordion type="single" collapsible className="w-full mt-20">
              {accordionData.map(({ id, title, content }) => (
                <AccordionItem value={`item-${id}`} key={id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="space-x-4">
                      <span>{id}</span> <span>{title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent
            value="sheet"
            className="bg-[#F2F2F7] text-navyblue h-[800px] lg:h-[1200px] rounded-3xl p-4 md:p-10 lg:p-20"
          >
            <h3 className="text-center font-bold text-4xl">
              Vilkår for nettauksjon
            </h3>
            <Accordion type="single" collapsible className="w-full mt-20">
              {accordionData.map(({ id, title, content }) => (
                <AccordionItem value={`item-${id}`} key={id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="space-x-4">
                      <span>{id}</span> <span>{title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent
            value="shield"
            className="bg-[#F2F2F7] text-navyblue h-[800px] lg:h-[1200px] rounded-3xl p-4 md:p-10 lg:p-20"
          >
            <h3 className="text-center font-bold text-4xl">Personvern</h3>
            <Accordion type="single" collapsible className="w-full mt-20">
              {accordionData.map(({ id, title, content }) => (
                <AccordionItem value={`item-${id}`} key={id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="space-x-4">
                      <span>{id}</span> <span>{title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{content}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          <TabsContent
            value="pricelist"
            className="bg-[#F2F2F7] text-navyblue h-[800px] lg:h-[1200px] rounded-3xl p-4 md:p-10 lg:p-20"
          >
            <h3 className="font-bold text-2xl mb-6">For salg</h3>
            <p className="max-w-xl">
              Vi tar ikke noe selger-salær fra privatpersoner.Ønsker du at vi
              hjelper til med tilstandsrapport tilkommer det kostnad på 3200
              inkl. mva Ved levering av bil til oss, da vil vi klargjøre den for
              auksjon tilkommer det kostnad på 4990 inkl. mvaSelger-Salær ved
              misligholdt av avtale: 4990,-*Les mer om vilkår ved misligholdt
            </p>
            <h3 className="font-bold text-2xl my-6">For kjøper</h3>
            <p className="max-w-xl">
              For alle auksjoner påløper et auksjonsgebyr som Kjøper vil bli
              belastet for.Auksjonsgebyret legges til kjøpesummen og betales av
              kjøper samtidig med Kjøpesummen. Fastpris på gebyr er 5990,-
            </p>
          </TabsContent>
          <TabsContent
            value="envelope"
            className="bg-[#F2F2F7] text-navyblue lg h-[800px]:lg:h-[1200px] rounded-3xl p-4 md:p-10 lg:p-20"
          >
            <ContactSection />
          </TabsContent>
        </Tabs>
      </Container>
    </section>
  );
};

export default InfoSenterFeatures;
