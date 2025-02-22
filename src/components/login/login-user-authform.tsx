"use client";

import Image from "next/image";
import FormInput from "../form-elements/form-input";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "../ui/use-toast";

export const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof formSchema>;

const LoginUserAuthForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSubmit = (data: FormData) => {
    setIsLoading(true);

    signIn("my-app-credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      // callbackUrl: searchParams?.get("from") || "/dashboard",
    })
      .then((res) => {
        if (!res?.ok) {
          return toast({
            title: "Something went wrong.",
            description: "Your sign in request failed. Please try again.",
            variant: "destructive",
          });
        }

        toast({
          title: "Sign In Successful",
          description: "You have successfully signed in.",
        });

        // Redirect to dashboard on successful sign-in
        router.push(searchParams?.get("from") || "/after-login");
      })
      .finally(() => {
        setIsLoading(false);
      });

  };

  return (
    <div className="w-full lg:w-1/2 pb-40">
      <div className="md:pl-10 lg:pl-20 2xl:pl-40 lg:pr-32">
        <div className="mt-[28px] items-center mb-10">
          <Link href="/">
            <Image src={"/logo.png"} alt="Anne" width={400} height={57.47} />
          </Link>
        </div>
        <h1 className="text-black font-roboto font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-3xl mb-20 text-left mt-14 2xl:mt-52">
          Logg inn <span className="font-neulis">på Nettauto.no</span>
        </h1>
        <div className="lg:pl-10 xl:pl-20">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div>
                {/* 1st input */}
                <div className="mb-4 [&>div>label]:text-black [&>div>label]:block [&>div>label]:font-roboto [&>div>label]:text-sm">
                  <FormInput
                    label="Brukernavn (e-postadresse)"
                    name="email"
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
                  <p className="mt-1 text-[#FF003D] text-xs font-medium text-right">
                    <Link href="/forgot-password">Glemt passord</Link>
                  </p>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="text-sm xl:text-base bg-[#FF003D] py-4 my-6 block w-full h-auto font-medium"
                  >
                    LOGG INN
                  </Button>
                  <p className="text-center text-black">
                    Har du ikke konto?{" "}
                    <Link
                      href={"/new-register"}
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

export default LoginUserAuthForm;
