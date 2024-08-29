import Container from "../ui/container";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductSlide from "./product-slide";

const ProductSliders = () => {
  return (
    <section className="pt-6 md:pt-24">
      <Container>
        <h1 className="text-navyblue mb-10 text-xl md:text-2xl font-semibold">
          NOEN AV VÅRE AUKSJONER
        </h1>
        <div className="">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1 gap-x-20">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <ProductSlide />
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
