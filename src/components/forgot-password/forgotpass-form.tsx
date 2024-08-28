"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormFloatingInput from "../form-elements/form-floating-input";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

const formSchema = z.object({
  carRegNo: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const ForgotPassForm = () => {
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
        className="basis-[60%] pt-5 bg-white px-60"
      >
        <div>
          <div className="flex items-center mb-40">
            <Image src={"/logo.png"} alt="Anne" width={300} height={57.47} />
          </div>

          <div className="my-5 rounded-2xl shadow-2xl pb-10">
            <h3 className="bg-[#06063E] text-3xl rounded-t-2xl rounded-tr-2xl text-center text-white py-10">
              Tilbakestill passord
            </h3>
            <div className="mt-8 space-y-10 flex flex-col items-center px-10">
              <p className="max-w-md text-center text-black">
                Skriv inn e-posten din så sender vi en kode du kan bruke for å
                lage et nytt passord.
              </p>
              <div className="w-3/4">
                <FormFloatingInput
                  name="din-e-post"
                  label="Din e-post*"
                  labelClassName="text-black ml-8 text-xl top-1 peer-focus:top-1"
                  inputClassName="rounded-full w-full h-auto py-5"
                />
                <Button className="text-base bg-[#FF003D] font-inter px-20 h-auto py-5 mt-16 rounded-full w-full">
                  Tilbakestill passord{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default ForgotPassForm;
