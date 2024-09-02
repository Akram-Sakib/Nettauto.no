"use client";

import { QueryKeys } from "@/data/queryKeys";
import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillCheckCircle } from "react-icons/ai";
import { z } from "zod";
import FormCheckBox from "../form-elements/form-checkbox";
import FormDateOfBirth from "../form-elements/form-date-of-birth";
import FormInput from "../form-elements/form-input";
import FormPhoneInput from "../form-elements/form-phone-input";
import { Button } from "../ui/button";
import { Form } from "../ui/form";
import { toast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
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
    businessCustomer: z.object({
      contactPerson: z.string({
        required_error: "Contact Person is required",
      }),
      companyName: z.string({
        required_error: "Company Name is required",
      }),
      organizationNo: z.string({
        required_error: "Organization No is required",
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
      website: z.string({
        required_error: "Website is Required",
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

const BusinessRegistrationForm = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: createMutation, isPending: createIsPending } = useMutation({
    mutationFn: async (data: any) => {
      const res = await axiosInstance.post(
        `/users/create-business-customer`,
        data
      );
      return res;
    },
    onSuccess: (res: any) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.BUSINESSCUSTOMER],
      });
      // queryClient.invalidateQueries({
      //   queryKey: [QueryKeys.MEMBER, params.id],
      // });

      if (res.success) {
        // console.log(res.data.paymentGatewayPageURL);
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
    defaultValues: {
      // email: "",
      // password: "",
      // businessCustomer: {
      //   contactPerson: "",
      //   companyName: "",
      //   organizationNo: "",
      //   dateOfBirth: "",
      //   emailForNotifications: "",
      //   contactNo: "",
      //   postalNo: "",
      //   address: "",
      //   website:"",
      //   city: "",
      //   acceptTerms: false,
      //   auctionsEmail: false,
      //   bidEmail: false,
      //   profileImage: "",
      // },
    },
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
        className="basis-[70%] pt-5 bg-white px-20"
      >
        <div className="flex justify-center items-center mb-10">
          <Link href="/">
            <Image src={"/logo.png"} alt="Anne" width={300} height={57.47} />
          </Link>
        </div>
        <div className="2xl:space-y-6 space-y-3">
          <div className="flex gap-x-9 justify-between">
            <div className="basis-[45%] text-sm 2xl:[&>*>label]:text-base">
              <FormInput
                name="businessCustomer.contactPerson"
                label="Kontaktperson"
                className="border-2 border-[#EBEBEB] py-2 2xl:py-4 h-auto"
              />
            </div>
            <div className="basis-[45%] text-sm 2xl:[&>*>label]:text-base">
              <FormDateOfBirth
                name="businessCustomer.dateOfBirth"
                label="Fødselsdato"
              />
              {/* <FormInput
                name="businessCustomer.dateOfBirth"
                label="Fødselsdato"
                className="border-2 border-[#EBEBEB] py-2 2xl:py-4 h-auto"
              /> */}
            </div>
          </div>
          <h3 className="font-inter font-semibold text-xl 2xl:text-2xl border-b-2 border-[#e2e2e2]">
            Bedrift informasjon
          </h3>
          {/* Addresse & Postnr*/}
          <div className="flex gap-x-9">
            <div className="basis-[60%] text-sm 2xl:[&>*>label]:text-base">
              <FormInput
                name="businessCustomer.companyName"
                label="Bedriftsnavn"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-2 2xl:py-4 h-auto"
              />
            </div>
            <div className="basis-[40%] text-sm 2xl:[&>*>label]:text-base">
              <FormInput
                name="businessCustomer.organizationNo"
                label="Organisasjons nr"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-2 2xl:py-4 h-auto"
              />
            </div>
          </div>
          {/* by  */}
          <div className="flex gap-x-9">
            <div className="flex gap-x-10 basis-[50%]">
              <div className="basis-[50%] text-sm 2xl:[&>*>label]:text-base">
                <FormInput
                  name="businessCustomer.postalNo"
                  label="Postnr"
                  className="bg-white rounded-lg border-2 border-gray-100 w-full py-2 2xl:py-4 h-auto"
                />
              </div>
              <div className="basis-[50%] text-sm 2xl:[&>*>label]:text-base">
                <FormInput
                  name="businessCustomer.address"
                  label="Adresse"
                  className="bg-white rounded-lg border-2 border-gray-100 w-full py-2 2xl:py-4 h-auto"
                />
              </div>
            </div>
            <div className="basis-[50%] text-sm 2xl:[&>*>label]:text-base">
              <FormInput
                name="businessCustomer.city"
                label="By"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-2 2xl:py-4 h-auto"
              />
            </div>
          </div>
          <div className="flex gap-x-9">
            <div className="basis-[50%] text-sm 2xl:[&>*>label]:text-base">
              <FormPhoneInput
                name="businessCustomer.contactNo"
                label={"Telefonnummer"}
                className="2xl:[&>button]:py-4 2xl:[&>input]:py-4 [&>button]:h-auto [&>input]:h-auto"
              />
            </div>
            <div className="basis-[50%] text-sm 2xl:[&>*>label]:text-base">
              <FormInput
                name="email"
                label="E-post"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-2 2xl:py-4 h-auto"
              />
            </div>
          </div>
          <div className="flex gap-x-9">
            <div className="basis-[50%] text-sm 2xl:[&>*>label]:text-base">
              <FormInput
                name="businessCustomer.website"
                label="Webside"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-2 2xl:py-4 h-auto"
              />
            </div>
            <div className="basis-[50%] text-sm 2xl:[&>*>label]:text-base">
              <FormInput
                name="businessCustomer.emailForNotifications"
                label="E-port for verslar"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-2 2xl:py-4 h-auto"
              />
            </div>
          </div>
          <h3 className="font-inter font-semibold text-xl 2xl:text-2xl border-b-2 border-[#e2e2e2]">
            Passord
          </h3>
          {/* passord  */}
          <div className="flex gap-x-9">
            <div className="basis-[50%] text-sm 2xl:[&>*>label]:text-base">
              <FormInput
                name="password"
                label="Passord"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-2 2xl:py-4 h-auto"
              />
            </div>
            <div className="basis-[50%] text-sm 2xl:[&>*>label]:text-base">
              <FormInput
                name="confirmPassword"
                label="Bekreft passord"
                className="bg-white rounded-lg border-2 border-gray-100 w-full py-2 2xl:py-4 h-auto"
              />
            </div>
          </div>
        </div>
        <div className="2xl:my-5 flex justify-between">
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-2">
              <FormCheckBox
                name="businessCustomer.acceptTerms"
                label="Ved å registrere deg aksepterer du  våre brukerbetingelser og personvernpolicy"
              />
              {/* <label
                htmlFor="terms"
                className="text-sm text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ved å registrere deg aksepterer du
                våre brukerbetingelser og personvernpolicy
              </label> */}
            </div>
            <div className="flex items-center space-x-2">
              <FormCheckBox
                name="businessCustomer.auctionsEmail"
                label="Motta e-post ved nye auksjoner"
              />
              {/* <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ved å registrere deg aksepterer du
                våre brukerbetingelser og personvernpolicy
              </label> */}
            </div>
            <div className="flex items-center space-x-2">
              <FormCheckBox
                name="businessCustomer.bidEmail"
                label="Send meg e-post når det blir gitt høyre bud på auksjoner jeg har gitt bud"
              />
              {/* <label
                htmlFor="terms"
                className="text-sm text-[#717171] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Ved å registrere deg aksepterer du
                våre brukerbetingelser og personvernpolicy
              </label> */}
            </div>
            <Button
              type="submit"
              className="text-base bg-[#FF003D] px-10 py-6 mt-6"
            >
              Registrer meg
            </Button>
          </div>
          {/* validation  */}
          <ValidationMessage validations={validations} />
        </div>
      </form>
    </Form>
  );
};

export default BusinessRegistrationForm;
