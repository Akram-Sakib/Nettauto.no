"use client";
import { QueryKeys } from "@/data/queryKeys";
import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillCheckCircle } from "react-icons/ai";
import { z } from "zod";
import FormInput from "../form-elements/form-input";
import FormPhoneInput from "../form-elements/form-phone-input";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { toast } from "../ui/use-toast";

import { Checkbox } from "../ui/checkbox";
import DateOfBirth from "../form-elements/form-date-of-birth";
import FormCheckBox from "../form-elements/form-checkbox";
import ValidationMessage from "../ui/validation-message";

const formSchema = z
  .object({
    email: z
      .string({
        required_error: "Email is required",
      })
      .email(),
    password: z
      .string()
      .min(12, { message: "Minst 12 tegn" })
      .regex(/[a-z]/, { message: "Minst 1 liten bokstav" })
      .regex(/[A-Z]/, { message: "Minst 1 stor bokstav" })
      .regex(/\d/, { message: "Minst 1 tall" })
      .regex(/[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/, {
        message: "Minst 1 symbol (!“#$%&‘()*+,-./:;<=>?@[]^_`{|}~)",
      }),
    privateCustomer: z.object({
      name: z.string({
        required_error: "Name is required",
      }),
      dateOfBirth: z.coerce.date({
        required_error: "Date of birth is required",
        invalid_type_error: "Invalid type for date of birth",
      }),
      emailForNotifications: z
        .string({
          required_error: "Email For Notifications is required",
        })
        .email(),
      contactNo: z.string({
        required_error: "Contact number is required",
      }),
      postalNo: z.string({
        required_error: "Postal No is Required",
      }),
      address: z.string({
        required_error: "Address is Required",
      }),
      city: z.string({
        required_error: "City is Required",
      }),
      acceptTerms: z.boolean({
        required_error: "Accept Terms is Required",
      }),
      auctionsEmail: z.boolean({
        required_error: "Auctions Email is Required",
      }),
      bidEmail: z.boolean({
        required_error: "Bid Email is Required",
      }),
      profileImage: z.string().optional(),
    }),
    confirmPassword: z.string().min(1, "Bekreft passordet er påkrevd"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passordene samsvarer ikke",
  });

const PrivateRegistrationForm = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: createMutation, isPending: createIsPending } = useMutation({
    mutationFn: async (data: any) => {
      const res = await axiosInstance.post(
        `/users/create-private-customer`,
        data
      );
      return res;
    },
    onSuccess: (res: any) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PRIVATECUSTOMER],
      });

      if (res.success) {
        toast({
          variant: "default",
          title: "Registration Successful",
          description: "Your registration has been successfully submitted.",
        });

        router.push("/login");
      } else {
        toast({
          variant: "destructive",
          title: res.message,
          description: "There was a problem with your request.",
        });
      }
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    },
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    //@ts-ignore
    delete values.confirmPassword;
    createMutation(values);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const { watch } = form;

  const [validations, setValidations] = useState({
    length: false,
    lowercase: false,
    uppercase: false,
    number: false,
    symbol: false,
  });

  const password = watch("password", "");

  // Validation function to update state based on password criteria
  const validatePassword = (value: string) => {
    const validationStatus = {
      length: value.length >= 12,
      lowercase: /[a-z]/.test(value),
      uppercase: /[A-Z]/.test(value),
      number: /\d/.test(value),
      symbol: /[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(value),
    };
    setValidations(validationStatus);
    return Object.values(validationStatus).every(Boolean);
  };

  // Update validation state when password changes
  useEffect(() => {
    validatePassword(password);
  }, [password]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="basis-1/2 pt-5 bg-white pl-10 pr-5"
      >
        <div className="flex justify-center items-center mb-10">
          <Image src={"/logo.png"} alt="Anne" width={300} height={57.47} />
        </div>
        <div className="space-y-6">
          <div className="flex gap-x-9">
            <div className="basis-[60%] [&>*>label]:text-base">
              <FormInput
                name="privateCustomer.name"
                label="Navn"
                className="border-2 border-[#EBEBEB] py-4 h-auto"
              />
            </div>
            <div className="basis-[35%] [&>*>label]:text-base">
              <FormPhoneInput
                name="privateCustomer.contactNo"
                label={"Telefonnummer"}
                className="[&>button]:py-4 [&>input]:py-4 [&>button]:h-auto [&>input]:h-auto"
              />
            </div>
          </div>
          {/* Addresse & Postnr*/}
          <div className="flex gap-x-9">
            <div className="basis-[20%] [&>*>label]:text-base">
              <FormInput
                name="privateCustomer.postalNo"
                label="Postnr"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
            <div className="basis-[80%] [&>*>label]:text-base">
              <FormInput
                name="privateCustomer.address"
                label="Addresse"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
          </div>
          {/* by  */}
          <div className="flex gap-x-9">
            <div className="basis-[50%] [&>*>label]:text-base">
              <FormInput
                name="privateCustomer.city"
                label="By"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
            <div className="basis-[50%] [&>*>label]:text-base">
              <DateOfBirth
                name="privateCustomer.dateOfBirth"
                label="Fødselsdato"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
          </div>
          <div className="flex gap-x-9">
            <div className="basis-[50%] [&>*>label]:text-base">
              <FormInput
                name="email"
                label="E-port"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
            <div className="basis-[50%] [&>*>label]:text-base">
              <FormInput
                name="privateCustomer.emailForNotifications"
                label="E-port for verslar"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
          </div>
          {/* passord  */}
          <div className="flex gap-x-9">
            <div className="basis-[50%] [&>*>label]:text-base">
              <FormInput
                name="password"
                label="Passord"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
            <div className="basis-[50%] [&>*>label]:text-base">
              <FormInput
                name="confirmPassword"
                label="Backreft Passord"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-4 h-auto"
              />
            </div>
          </div>
        </div>
        {/* >>>>>>>>>> */}
        <div className="my-5">
          <ValidationMessage validations={validations} />
          <div className="mt-8">
            <div className="flex items-center space-x-2">
              <FormCheckBox
                name="privateCustomer.acceptTerms"
                label="Ved å registrere deg aksepterer du  våre brukerbetingelser og personvernpolicy"
              />
            </div>
            <div className="flex items-center space-x-2">
              <FormCheckBox
                name="privateCustomer.auctionsEmail"
                label="Motta e-post ved nye auksjoner"
              />
            </div>
            <div className="flex items-center space-x-2">
              <FormCheckBox
                name="privateCustomer.bidEmail"
                label="Send meg e-post når det blir gitt høyre bud på auksjoner jeg har gitt bud"
              />
            </div>
            <Button
              type="submit"
              className="text-base bg-[#FF003D] w-[465px] py-6 mt-6"
            >
              Registrer meg
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default PrivateRegistrationForm;
