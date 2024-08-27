"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormInput from "@/components/form-elements/form-input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { AiFillCheckCircle } from "react-icons/ai";
const formSchema = z.object({
  carRegNo: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
const InnStillinger = () => {
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
    <ScrollArea className="h-full">
      <div className="flex-1 p-4 md:p-8 pt-6 bg-white">
        <div className="mb-20 space-y-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Innstillinger - <span className="text-primaryred">privat</span>
          </h2>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="basis-1/2 pt-5 bg-white pl-10 pr-5"
          >
            <div className="space-y-6">
              <div className="flex gap-x-9">
                <div className="basis-[33%] [&>*>label]:text-base">
                  <FormInput
                    name="kontaktperson"
                    label="Kontaktperson"
                    className="border-2 border-[#EBEBEB] py-4 h-auto"
                  />
                </div>
                <div className="basis-[33%] [&>*>label]:text-base">
                  <FormInput
                    name="telephone"
                    label="E-post"
                    className="border-2 border-[#EBEBEB] py-4 h-auto"
                  />
                </div>
                <div className="basis-[33%] [&>*>label]:text-base">
                  <FormInput
                    name="telephone"
                    label="Telefon nr"
                    className="border-2 border-[#EBEBEB] py-4 h-auto"
                  />
                </div>
              </div>
              {/* Addresse & Postnr*/}
              <div className="flex gap-x-9">
                <div className="basis-[40%] [&>*>label]:text-base">
                  <FormInput
                    name="passord"
                    label="Passord"
                    type="password"
                    className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
                  />
                </div>
                <div className="basis-[20%] [&>*>label]:text-base">
                  <FormInput
                    name="postnr"
                    label="Postnr"
                    className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
                  />
                </div>
                <div className="basis-[40%] [&>*>label]:text-base">
                  <FormInput
                    name="address"
                    label="Address"
                    className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
                  />
                </div>
              </div>
              {/* by  */}
              <div className="flex gap-x-9">
                <div className="basis-[30%] [&>*>label]:text-base">
                  <FormInput
                    name="e-post-varsler"
                    label="E-post for varsler"
                    className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
                  />
                </div>
                <div className="basis-[70%] [&>*>label]:text-base">
                  <FormInput
                    name="by"
                    label="By"
                    className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
                  />
                </div>
              </div>
              {/* by  */}
              <div className="flex gap-x-9">
                <div className="basis-[30%] [&>*>label]:text-base">
                  <FormInput
                    name="e-post-varsler"
                    label="E-post for varsler"
                    className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
                  />
                </div>
              </div>
              {/* by  */}
              <div className="flex gap-x-9">
                <div className="basis-[30%] [&>*>label]:text-base">
                  <FormInput
                    name="fødselsdato"
                    label="Fødselsdato"
                    className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
                  />
                </div>
              </div>
            </div>
            <div className="my-5 flex items-center justify-between">
              <div className="mt-8 space-y-6">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Motta e-post ved nye auksjoner
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Send meg e-post bud mottatt på mine auksjoner
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Send meg e-post når det blir gitt høyre bud på auksjoner jeg
                    har gitt bud
                  </label>
                </div>
              </div>
              <Link href="/private-registration">
                <Button className="text-base bg-[#06063E] py-3 px-8">
                  Bekreft endringer
                </Button>
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </ScrollArea>
  );
};

export default InnStillinger;
