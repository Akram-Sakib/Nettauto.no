"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import FormFloatingInput from "@/components/form-elements/form-floating-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { AiFillCheckCircle } from "react-icons/ai";
const formSchema = z.object({
  carRegNo: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
const AdminList = () => {
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
    <ScrollArea className="h-full pl-6 m-10 ">
      <div className="mb-6 space-y-8">
        <h2 className="text-2xl font-bold tracking-tight">Ny admin</h2>
      </div>
      <div className="flex-1 p-4 md:p-8 pt-6 bg-white rounded-2xl">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-10 mt-10 px-60"
          >
            <div className="flex gap-x-5 [&>div]:basis-1/2">
              <FormFloatingInput
                label="Fornavn"
                name="fornavn"
                labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
                inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-4"
              />
              <FormFloatingInput
                label="Etternavn"
                name="etternavn"
                labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
                inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-4"
              />
            </div>
            <div className="flex gap-x-5 [&>div]:basis-1/2">
              <FormFloatingInput
                label="Personnummer"
                name="personnummer"
                labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
                inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-4"
              />
              <FormFloatingInput
                label="Rolle"
                name="rolle"
                labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
                inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-4"
              />
            </div>
            <FormFloatingInput
              label="Mobilnummer"
              name="mobilnummer"
              labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
              inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-4"
            />
            <FormFloatingInput
              label="Passord*"
              name="passord"
              labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
              inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-4"
            />
            <FormFloatingInput
              label="Gjenta passord*"
              name="gjentapassord*"
              labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
              inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-4"
            />
            <div className="space-y-4">
              <label htmlFor="">Passord styrke</label>
              <div className="flex gap-x-5">
                <Separator className="basis-[33%] h-1 rounded-2xl" />
                <Separator className="basis-[33%] h-1 rounded-2xl" />
                <Separator className="basis-[33%] h-1 rounded-2xl" />
              </div>
            </div>
            <div className="">
              {/* validetion  */}
              <div className="text-black">
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
                <div className="mt-4 flex items-center gap-1">
                  {" "}
                  <span>
                    <AiFillCheckCircle className=" text-gray-400" />
                  </span>
                  {"Minst 1 symbol (`!“#$%&‘()*+,-./:;<=>?@[]^_`{|}~`)</h2> "}
                </div>
              </div>
              <div className="mt-8">
                <Button className="text-xl font-inter bg-[#263238] px-32 h-auto py-4 rounded-full mt-6">
                  Opprett ansatt
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </ScrollArea>
  );
};

export default AdminList;
