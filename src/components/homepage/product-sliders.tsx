import Container from "../ui/container";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductSlide from "./product-slide";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Image from "next/image";

const ProductSliders = () => {
  return (
    <section className="pt-6 md:pt-24">
      <Container>
        <h1 className="text-navyblue ml-10 mb-10 text-xl md:text-2xl font-neulis font-bold">
          NOEN AV VÅRE AUKSJONER
        </h1>
        <div className="">
          <Carousel
            opts={{
              align: "start",
              
            }}
            className="w-full max-w-full"
          >
            <CarouselContent className="gap-x-5 px-4 lg:px-10 justify-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 flex justify-center"
                >
                  <div className="border border-[#CFCFCF] rounded-lg font-roboto inline-block">
                    <Image
                      src={"/white-car.png"}
                      alt="car1"
                      width={1000}
                      height={250}
                      className="mb-6 w-full h-[150px] 2xl:h-[200px]"
                    />
                    <div className="px-4 pb-4">
                      <div className="flex gap-x-4 items-start">
                        <h3 className="text-navyblue font-medium text-sm xl:text-base">
                          Porsche 911 GT3
                        </h3>
                        <p className="text-[#717171] self-end text-xs">
                          Back wheel
                        </p>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex gap-x-4 text-[#717171] text-xs xl:text-sm">
                        <p>13000 km</p>
                        <p>2022</p>
                        <p>Automatic</p>
                        <p>4.0 L</p>
                        <p>Benzin</p>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex gap-x-4 text-primaryred text-xs xl:text-sm">
                        <p>122 Bud</p>
                        <p>Status</p>
                        <p>Avsluttes om:</p>
                      </div>
                      <div className="flex gap-x-4 items-center text-navyblue mt-2 text-xs xl:text-sm">
                        <p className="font-medium">122 Bud</p>
                        <Button
                          variant={"outline"}
                          className="border-2 text-xs xl:text-base"
                        >
                          Live Now
                        </Button>
                        <p className="font-medium">Avsluttes om:</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant={"default"}
              className="rounded-sm bg-primaryred hover:bg-primaryred/60 h-12 w-12"
            />
            <CarouselNext
              variant={"default"}
              className="rounded-sm bg-primaryred hover:bg-primaryred/60 h-12 w-12"
            />
          </Carousel>
        </div>
      </Container>
    </section>
  );
};

export default ProductSliders;
