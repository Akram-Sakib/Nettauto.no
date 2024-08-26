"use client";

import Image from "next/image";
import FormInput from "../form-elements/form-input";
import { Button } from "../ui/button";
import { Form } from "../ui/form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

const formSchema = z.object({
  carRegNo: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const LeftContentLogin = () => {
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
    <div className="w-1/2">
      <div className="pl-40 pr-32">
        <div className="mt-[28px] items-center mb-10">
          <Link href="/">
            <Image src={"/logo.png"} alt="Anne" width={400} height={57.47} />
          </Link>
        </div>
        <h1 className="text-black font-roboto font-semibold text-3xl mb-20 text-left mt-52">
          Logg inn <span className="font-neulis">på Nettauto.no</span>
        </h1>
        <div className="pl-20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                {/* 1st input */}
                <div className="mb-4 [&>div>label]:text-black [&>div>label]:block [&>div>label]:font-roboto [&>div>label]:text-sm">
                  <FormInput
                    label="Brukernavn (e-postadresse)"
                    name="username"
                    type="text"
                    className="bg-white rounded-lg border-2 border-[#EBEBEB] h-auto py-3 w-full text-black"
                  />
                </div>
                {/* 2nd input */}
                <div className="[&>div>label]:text-black [&>div>label]:block [&>div>label]:font-roboto [&>div>label]:text-sm">
                  <FormInput
                    name="password"
                    type="password"
                    label="Passord"
                    className="bg-white text-black rounded-lg border-2 border-[#EBEBEB] h-auto py-3 w-full"
                  />
                  <p className="text-end cursor-pointer mt-1 text-[#FF003D] text-xs font-medium">
                    Glemt passord
                  </p>
                  <Button className="text-base bg-[#FF003D] py-4 rounded-tr-none rounded-bl-none rounded-tl-sm rounded-br-sm my-6 block w-full h-auto font-medium">
                    LOGG INN
                  </Button>
                  <p className="text-center text-black">
                    Har du ikke konto?{" "}
                    <Link
                      href={"/register"}
                      className="cursor-pointer text-[#FF003D] font-bold"
                    >
                      Registrer deg
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default LeftContentLogin;
