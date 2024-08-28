import Bid from "@/components/super-admin-live/bid";
import SuperAdminCharts from "@/components/super-admin-live/live-charts";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <section className="space-y-4 bg-white pb-6">
      <div className="flex justify-between px-3 pt-10 pb-4">
        <Link href="/">
          <Image src={"/text-logo.png"} alt="Logo" width={300} height={40} />
        </Link>
        <div className="text-center space-y-1">
          <h2 className="text-[40px] font-bold">Mercedes GLC</h2>
          <p className="text-base">White - Cruise Control - Coating</p>
          <Button className="rounded-full px-8 bg-[#020278] bg-opacity-10 text-navyblue border-navyblue border hover:text-white">
            STT 989
          </Button>
          <p className="text-sm">Göteborg</p>
        </div>
        <div className="flex items-end">
          <div className="flex gap-x-4 text-white font-semibold">
            <Button className="bg-[#FF003D] h-[42px] rounded">
              Change time manuelly
            </Button>
            <Button className="bg-[#FF003D] h-[42px] rounded">
              CHANGE ADS
            </Button>
            <Button className="bg-[#FF003D] h-[42px] rounded">STOP ADS</Button>
          </div>
          <div className="flex flex-col items-end">
            <h2 className="text-navyblue max-w-64 text-right">
              <span className="font-semibold">Selges av:</span>
              <span>Næringsvirksomhet(Ikke Nettauto.no)</span>
            </h2>
            <p className="text-navyblue italic">
              <span className="semibold">Auksjonsnr:</span> 4556789
            </p>
            <Button
              className="border-orange-600 border-2 uppercase text-xl font-bold bg-transparent text-orange-600"
              variant={"outline"}
            >
              Live Now
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 px-2 gap-x-4">
        <div className="relative w-full h-[500px]">
          <Image
            src={"/white-car.png"}
            alt="White Car"
            fill
            className="w-full h-full"
          />
        </div>
        <div className="relative w-full h-[500px]">
          <Image
            src={"/white-car.png"}
            alt="White Car"
            fill
            className="w-full h-full"
          />
        </div>
        <div className="relative w-full h-[500px]">
          <Image
            src={"/white-car.png"}
            alt="White Car"
            fill
            className="w-full h-full"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="basis-[20%] pl-5 space-y-8 mt-10">
          <ul className="bg-[#D9D9D9] text-[#263238] p-6 space-y-8 text-xl rounded-xl max-w-60 mt-10">
            <li>Aktive budrunder</li>
            <li>Mine bud</li>
            <li>Mine kjøp</li>
            <li>Varsler</li>
            <li>Innstillinger</li>
          </ul>
          <Button className="bg-primaryred inline-block ml-8">Logg ut</Button>
          <p className="text-xl text-[#06063E] ml-4">Gå til salg</p>
        </div>
        <div className="basis-[60%]">
          <div className="my-10 flex flex-col items-center">
            <div className="flex items-center gap-x-4">
              <div>
                <Image
                  src={"/auction.png"}
                  width={43}
                  height={42}
                  alt="Auction"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Høyeste bud</h2>
                <h2 className="text-3xl text-primaryred font-bold">
                  750 000 kr
                </h2>
              </div>
            </div>
            <p className="italic text-navyblue">
              Minstepris ikke oppnådd, men kan fortsatt bli solgt
            </p>
          </div>
          <div className="flex justify-center">
            <Tabs defaultValue="account" className="w-[900px]">
              <TabsList className="border-b-2 border-[#DCDCDC]">
                <TabsTrigger
                  value="account"
                  className="data-[state=active]:border-primaryred px-8"
                >
                  Beskrivelse
                </TabsTrigger>
                <TabsTrigger
                  value="password"
                  className="data-[state=active]:border-primaryred px-8"
                >
                  Utstyr
                </TabsTrigger>
                <TabsTrigger
                  value="dokumenter"
                  className="data-[state=active]:border-primaryred px-8"
                >
                  Dokumenter
                </TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="space-y-6">
                <div className="grid grid-cols-8 gap-4 my-4">
                  <p className="font-medium text-navyblue">Kilometer</p>
                  <p className="text-[#717171]">67000 km</p>
                  <p className="font-medium text-navyblue">Årsmodell</p>
                  <p className="text-[#717171]">2022</p>
                  <p className="font-medium text-navyblue">Girtype</p>
                  <p className="text-[#717171]">Automatic</p>
                  <p className="font-medium text-navyblue">Sylindervolum</p>
                  <p className="text-[#717171]">1.2L</p>
                </div>
                <div className="grid grid-cols-8 gap-4 my-4">
                  <p className="font-medium text-navyblue">Drivstoff</p>
                  <p className="text-[#717171]">Diesel</p>
                  <p className="font-medium text-navyblue">Effekt</p>
                  <p className="text-[#717171]">650 hk</p>
                  <p className="font-medium text-navyblue">Farge</p>
                  <p className="text-[#717171]">White</p>
                  <p className="font-medium text-navyblue">Hjuldrift</p>
                  <p className="text-[#717171]">Front wheel</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-navyblue">
                    Beskrivelse
                  </h4>
                  <p className="text-[#717171] mb-4 font-roboto">
                    Quisque imperdiet dignissim enim dictum finibus. Sed
                    consectetutr convallis enim eget laoreet. Aenean vitae nisl
                    mollis, porta risus vel, dapibus lectus. Etiam ac suscipit
                    eros, eget maximus
                  </p>
                  <p className="text-[#717171] font-roboto">
                    Etiam sit amet ex pharetra, venenatis ante vehicula, gravida
                    sapien. Fusce eleifend vulputate nibh, non cursus augue
                    placerat pellentesque. Sed venenatis risus nec felis mollis,
                    in pharetra urna euismod. Morbi aliquam ut turpis sit amet
                    ultrices. Vestibulum mattis blandit nisl, et tristique elit
                    scelerisque nec. Fusce eleifend laoreet dui eget aliquet. Ut
                    rutrum risus et nunc pretium scelerisque. Fusce viverra,
                    ligula quis pellentesque interdum, leo felis congue dui, ac
                    accumsan sem nulla id lorem. Praesent ut tristique dui, nec
                    condimentum lacus. Maecenas lobortis ante id egestas
                    placerat. Nullam at ultricies lacus. Nam in nulla
                    consectetur, suscipit mauris eu, fringilla augue. Phasellus
                    gravida, dui quis dignissim tempus, tortor orci tristique
                    leo, ut congue diam ipsum at massa. Pellentesque ut
                    vestibulum erat. Donec a felis eget
                  </p>
                </div>
                <div>
                  <Label className="text-lg font-bold mb-5 block">Utstyr</Label>
                  <div className="grid grid-cols-4 gap-y-5 text-[#717171]">
                    <div className="space-y-4">
                      <p>Auxiliary heating</p>
                      <p>Bluetooth</p>
                      <p>CD player</p>
                      <p>Central locking</p>
                    </div>
                    <div className="space-y-4">
                      <p>Auxiliary heating</p>
                      <p>Bluetooth</p>
                      <p>CD player</p>
                      <p>Central locking</p>
                    </div>
                    <div className="space-y-4">
                      <p>Auxiliary heating</p>
                      <p>Bluetooth</p>
                      <p>CD player</p>
                      <p>Central locking</p>
                    </div>
                    <div className="space-y-4">
                      <p>Auxiliary heating</p>
                      <p>Bluetooth</p>
                      <p>CD player</p>
                      <p>Central locking</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="password"></TabsContent>
              <TabsContent value="dokumenter"></TabsContent>
            </Tabs>
          </div>
        </div>
        <div className="relative basis-[20%] space-y-6">
          <div className="mb-8">
            <h4 className="font-neulis text-xl text-primaryred mb-3">
              Avsluttes om
            </h4>
            <div className="rounded-md border-2 border-[#EBEBEB] p-2 flex justify-around">
              {[
                { title: "3", text: "Dager" },
                { title: "06", text: "Timer" },
                { title: "58", text: "Minutter" },
                { title: "23", text: "Sekunder" },
              ].map(({ title, text }) => (
                <div className="text-center">
                  <h4 className="text-primaryred text-xl font-bold">{title}</h4>
                  <p className="text-sm text-[#717171]">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-x-4 text-white font-semibold">
            <Button className="bg-[#FF003D] h-[42px] rounded">
              Change time manuelly
            </Button>
            <Button className="bg-[#FF003D] h-[42px] rounded">
              CHANGE ADS
            </Button>
            <Button className="bg-[#FF003D] h-[42px] rounded">STOP ADS</Button>
          </div>
          <div className="bg-[#E8E8E8] p-4 rounded-lg space-y-6">
            <div className="flex justify-between items-center">
              <Label className="text-lg font-bold mb-5 block">
                BUDHISTORIKK
              </Label>
              <span className="text-primaryred">12 Bud</span>
            </div>
            <Bid />
            <Bid />
            <Bid />
            <Bid />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
