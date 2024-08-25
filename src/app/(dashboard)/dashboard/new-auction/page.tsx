"use client";

import { z } from "zod";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/form-elements/form-input";
import FormSelect from "@/components/form-elements/form-select";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
            <div className="flex gap-x-8">
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
            <div className="grid grid-cols-4 gap-8">
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
              <div className="">
                <FormSelect
                  name="driftstype"
                  label="Driftstype"
                  placeholder="Firehjulstrekk"
                  className="border-[#EBEBEB]"
                  options={[{ label: "Option 1", value: "Option Value" }]}
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
                  name="minimumpris"
                  label="Minimum pris"
                  placeholder="100 000 kr"
                  className="border-[#EBEBEB]"
                  options={[{ label: "Option 1", value: "Option Value" }]}
                />
              </div>
            </div>
          </form>
        </Form>
      </div>
    </ScrollArea>
  );
};

export default NewAuction;
