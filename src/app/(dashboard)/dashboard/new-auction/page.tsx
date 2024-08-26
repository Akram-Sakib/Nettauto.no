"use client";

import { z } from "zod";

import FormInput from "@/components/form-elements/form-input";
import FormSelect from "@/components/form-elements/form-select";
import FormTextArea from "@/components/form-elements/form-textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  carRegNo: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const NewAuction = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      carRegNo: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <ScrollArea className="h-full bg-white pl-6 rounded-2xl">
      <div className="flex-1 space-y-20 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-normal tracking-tight font-neulis">
            Ny auksjon - <span className="text-primaryred">bil</span>
          </h2>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex gap-x-8 [&>*>*>label]:text-lg">
              <div className="basis-[25%]">
                <FormInput
                  name="carRegNo"
                  label="Bilens regnr."
                  placeholder="NA 12345"
                  className="border-[#EBEBEB] py-6"
                />
              </div>
              <div className="basis-[25%]">
                <FormSelect
                  name="place"
                  label="Sted"
                  placeholder="Velg by"
                  className="border-[#EBEBEB]"
                  options={[{ label: "Option 1", value: "Option Value" }]}
                />
              </div>
              <div className="basis-[50%]">
                <FormInput
                  name="shortDescription"
                  label="Kort beskrivelse "
                  placeholder="ACC/Coating/ Ny service"
                  className="border-[#EBEBEB] py-6"
                />
              </div>
            </div>
            <Alert className="bg-[#E8F9FF] px-10 border-none py-6">
              <AlertDescription className="text-lg text-black text-center">
                Last opp bilder ved å klikke her
                <span className="text-primaryred"> Last opp</span>
              </AlertDescription>
            </Alert>
            <div className="grid grid-cols-4 gap-8 [&>*>*>label]:text-lg">
              <div className="">
                <FormInput
                  name="marke"
                  label="Merke"
                  placeholder="NA 12345"
                  className="border-[#EBEBEB] py-6"
                />
              </div>
              <div className="">
                <FormInput
                  name="model"
                  label="Modell"
                  placeholder=" GLS 400"
                  className="border-[#EBEBEB] py-6"
                />
              </div>
              <div className="">
                <FormInput
                  name="arsmodell"
                  label="Årsmodell"
                  placeholder="2020"
                  className="border-[#EBEBEB] py-6"
                />
              </div>
              <div className="">
                <FormInput
                  name="kilometer"
                  label="Kilometer"
                  placeholder="50.000 km"
                  className="border-[#EBEBEB] py-6"
                />
              </div>
              <div className="">
                <FormInput
                  name="sylindervolum"
                  label="Sylindervolum"
                  placeholder=" 3.0"
                  className="border-[#EBEBEB] py-6"
                />
              </div>
              <div className="">
                <FormInput
                  name="effect"
                  label="Effekt"
                  placeholder=" 330 hk"
                  className="border-[#EBEBEB] py-6"
                />
              </div>
              <div className="">
                <FormSelect
                  name="farge"
                  label="Farge"
                  placeholder="Velg farge"
                  className="border-[#EBEBEB]"
                  options={[{ label: "Option 1", value: "Option Value" }]}
                />
              </div>
              <div className="">
                <FormSelect
                  name="girtype"
                  label="Girtype"
                  placeholder="Automat"
                  className="border-[#EBEBEB]"
                  options={[{ label: "Option 1", value: "Option Value" }]}
                />
              </div>
              <div className=""></div>
              <div className="[&>*>label]:text-lg">
                <FormSelect
                  name="driftstype"
                  label="Driftstype"
                  placeholder="Firehjulstrekk"
                  className="border-[#EBEBEB]"
                  options={[{ label: "Option 1", value: "Option Value" }]}
                />
              </div>
              <div className="[&>*>label]:text-lg">
                <FormInput
                  name="effect"
                  label="Effekt"
                  placeholder="330 hk"
                  className="border-[#EBEBEB] py-6"
                />
              </div>
              <div className="[&>*>label]:text-lg">
                <FormSelect
                  name="minimumpris"
                  label="Minimum pris"
                  placeholder="100 000 kr"
                  className="border-[#EBEBEB]"
                  options={[{ label: "Option 1", value: "Option Value" }]}
                />
              </div>
            </div>
            <div className="[&>*>label]:text-lg">
              <FormTextArea
                name="description"
                label="Beskrivelse - tilstand og egenerklæring"
                placeholder="Legg inn"
              />
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
            <div className="space-y-2">
              <Label className="text-lg">Dokumenter</Label>
              <Alert className="bg-[#E8F9FF] px-10 border-none py-6">
                <AlertDescription className="text-lg text-black text-center">
                  Last opp dokumenter
                  <span className="text-primaryred">(PDF)</span>
                </AlertDescription>
              </Alert>
            </div>
            <div className="space-y-4">
              <Label className="text-lg text-navyblue block">
                Velg auksjonstid
              </Label>
              <div className="flex gap-x-5 pl-52">
                <Button className="text-xs hover:bg-[#008B65] bg-navyblue h-auto px-8 rounded-lg">
                  24 timer
                </Button>
                <Button className="text-xs hover:bg-[#008B65] bg-navyblue h-auto px-8 rounded-lg">
                  3 dager
                </Button>
                <Button className="text-xs hover:bg-[#008B65] bg-navyblue h-auto px-8 rounded-lg">
                  5 dager
                </Button>
                <Button className="text-xs hover:bg-[#008B65] bg-navyblue h-auto px-8 rounded-lg">
                  10 dager
                </Button>
              </div>
              <div className="flex justify-center gap-x-5 !mt-10">
                <Button className="text-xl font-medium hover:bg-[#008B65] bg-primaryred h-auto px-20 rounded-sm py-4">
                  SEND FOR GODKJENNING
                </Button>
                <Button className="text-xl font-medium hover:bg-[#008B65] bg-[#0B5F7C] h-auto px-20 rounded-sm py-4">
                  Lagre som utkast
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </ScrollArea>
  );
};

export default NewAuction;
