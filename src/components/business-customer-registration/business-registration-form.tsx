"use client";

import Image from "next/image";
import { AiFillCheckCircle } from "react-icons/ai";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Form } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormInput from "../form-elements/form-input";
import FormPhoneInput from "../form-elements/form-phone-input";
import Link from "next/link";

const formSchema = z.object({
  carRegNo: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const BusinessRegistrationForm = () => {
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
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="basis-[70%] pt-5 bg-white px-20"
      >
        <div className="flex justify-center items-center mb-10">
          <Image src={"/logo.png"} alt="Anne" width={300} height={57.47} />
        </div>
        <div className="space-y-6">
          <div className="flex gap-x-9 justify-between">
            <div className="basis-[45%] [&>*>label]:text-base">
              <FormInput
                name="navn"
                label="Navn"
                className="border-2 border-[#EBEBEB] py-4 h-auto"
              />
            </div>
            <div className="basis-[45%] [&>*>label]:text-base">
              <FormInput
                name="fødselsdato"
                label="Fødselsdato"
                className="border-2 border-[#EBEBEB] py-4 h-auto"
              />
            </div>
          </div>
          <h3 className="font-inter font-semibold text-2xl border-b-2 border-[#e2e2e2]">
            Bedrift informasjon
          </h3>
          {/* Addresse & Postnr*/}
          <div className="flex gap-x-9">
            <div className="basis-[60%] [&>*>label]:text-base">
              <FormInput
                name="bedriftsnavn"
                label="Bedriftsnavn"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
            <div className="basis-[40%] [&>*>label]:text-base">
              <FormInput
                name="organisasjons-nr"
                label="Organisasjons nr"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
          </div>
          {/* by  */}
          <div className="flex gap-x-9">
            <div className="flex gap-x-10 basis-[50%]">
              <div className="basis-[50%] [&>*>label]:text-base">
                <FormInput
                  name="postnr"
                  label="Postnr"
                  className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
                />
              </div>
              <div className="basis-[50%] [&>*>label]:text-base">
                <FormInput
                  name="Adresse"
                  label="Adresse"
                  className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
                />
              </div>
            </div>
            <div className="basis-[50%] [&>*>label]:text-base">
              <FormInput
                name="By"
                label="By"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
          </div>
          <div className="flex gap-x-9">
            <div className="basis-[50%] [&>*>label]:text-base">
              <FormPhoneInput
                name="telephone"
                label={"Telefonnummer"}
                className="[&>button]:py-4 [&>input]:py-4 [&>button]:h-auto [&>input]:h-auto"
              />
            </div>
            <div className="basis-[50%] [&>*>label]:text-base">
              <FormInput
                name="E-post"
                label="E-post"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
          </div>
          <div className="flex gap-x-9">
            <div className="basis-[50%] [&>*>label]:text-base">
              <FormInput
                name="webside"
                label="Webside"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
            <div className="basis-[50%] [&>*>label]:text-base">
              <FormInput
                name="verslar"
                label="E-port for verslar"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
          </div>
          <h3 className="font-inter font-semibold text-2xl border-b-2 border-[#e2e2e2]">
            Passord
          </h3>
          {/* passord  */}
          <div className="flex gap-x-9">
            <div className="basis-[50%] [&>*>label]:text-base">
              <FormInput
                name="passord"
                label="Passord"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
            <div className="basis-[50%] [&>*>label]:text-base">
              <FormInput
                name="bekreft-passord"
                label="Bekreft passord"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
          </div>
        </div>
        <div className="my-5 flex justify-between">
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ved å registrere deg aksepterer du
                våre brukerbetingelser og personvernpolicy
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ved å registrere deg aksepterer du
                våre brukerbetingelser og personvernpolicy
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ved å registrere deg aksepterer du
                våre brukerbetingelser og personvernpolicy
              </label>
            </div>
            <Link href="/private-registration">
              <Button className="text-base bg-[#FF003D] px-10 py-6 mt-6">
                Registrer meg
              </Button>
            </Link>
          </div>
          {/* validetion  */}
          <div className=" text-black ml-6">
            <div className="mt-4 flex items-center gap-1">
              <span>
                <AiFillCheckCircle className=" text-gray-400" />
              </span>
              Minst 12 tegn
            </div>
            <div className="mt-4 flex items-center gap-1">
              <span>
                <AiFillCheckCircle className=" text-gray-400" />
              </span>
              Middels eller sterkt passord
            </div>
            <div className="mt-4 flex items-center gap-1">
              {" "}
              <span>
                <AiFillCheckCircle className=" text-gray-400" />
              </span>
              Minst 1 liten bokstav
            </div>
            <div className="mt-4 flex items-center gap-1">
              {" "}
              <span>
                <AiFillCheckCircle className=" text-gray-400" />
              </span>
              Minst 1 stor bokstav
            </div>
            <div className="mt-4 flex items-center gap-1">
              {" "}
              <span>
                <AiFillCheckCircle className=" text-gray-400" />
              </span>
              Minst 1 tall
            </div>
            {/* <h2> <span></span>Minst 1 symbol (`!“#$%&‘()*+,-./:;<=>?@[]^_`{|}~`)</h2> */}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default BusinessRegistrationForm;
