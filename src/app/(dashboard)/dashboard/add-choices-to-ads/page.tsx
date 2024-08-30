import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import dynamic from "next/dynamic";
const QuilTextEditor = dynamic(
  () => import("../../../../components/text-editor/quil-text-editor"),
  {
    ssr: false,
  }
);
const AdminList = () => {
  return (
    <ScrollArea className="h-full lg:pl-6 m-10 ">
      <div className="mb-6 space-y-8">
        <h2 className="text-2xl font-bold tracking-tight">Legg til</h2>
      </div>
      <div className="flex-1 space-y-10 p-4 md:p-8 pt-6 bg-white rounded-2xl">
        <div className="space-y-20 ">
          {/* Component */}
          <div>
            <Label className="text-lg font-bold mb-10 block text-primaryred">
              Utstyr
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 text-[#717171]">
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
            <Button className="bg-[#263238] rounded-full font-inter font-normal text-base mt-20">
              Add more/Remove
            </Button>
          </div>
          {/* Component */}
          <div>
            <Label className="text-lg font-bold mb-10 block text-primaryred">
              Farge
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 text-[#717171]">
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
            <Button className="bg-[#263238] rounded-full font-inter font-normal text-base mt-20">
              Add more/Remove
            </Button>
          </div>
          {/* Component */}
          <div>
            <Label className="text-lg font-bold mb-10 block text-primaryred">
              Girtype
            </Label>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 text-[#717171]">
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
            <Button className="bg-[#263238] rounded-full font-inter font-normal text-base mt-20">
              Add more/Remove
            </Button>
          </div>
          {/* Component */}
          <div className="flex flex-col lg:flex-row gap-x-20">
            <div className="basis-full lg:basis-[30%]">
              <Label className="text-lg font-bold mb-10 block text-primaryred">
                By
              </Label>
              <div className="flex justify-between gap-5 text-[#717171]">
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
              <Button className="bg-[#263238] rounded-full font-inter font-normal text-base mt-20">
                Add more/Remove
              </Button>
            </div>
            <div className="">
              <Separator orientation="vertical" className="h-full w-[2px]" />
            </div>
            <div className="mt-10 lg:mt-0">
              <Label className="text-lg font-bold mb-10 block text-primaryred">
                Hjuldrift
              </Label>
              <div className="grid grid-cols-2 gap-y-5 text-[#717171]">
                <div className="space-y-4">
                  <p>Auxiliary heating</p>
                  <p>Bluetooth</p>
                  <p>CD player</p>
                  <p>Central locking</p>
                </div>
              </div>
              <Button className="bg-[#263238] rounded-full font-inter font-normal text-base mt-20">
                Add more/Remove
              </Button>
            </div>
          </div>
          {/* Component */}
          <div >
            <Label className="text-lg font-bold mb-10 block text-primaryred">
              Girtype
            </Label>
            <QuilTextEditor />
            <Button className="bg-[#263238] rounded-full font-inter font-normal text-base mt-60 lg:mt-20 px-10">
              Save
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default AdminList;
