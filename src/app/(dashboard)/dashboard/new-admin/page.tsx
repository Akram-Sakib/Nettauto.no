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
import FormFloatingSelect from "@/components/form-elements/form-floating-select";
import { useEffect, useState } from "react";
import ValidationMessage from "@/components/ui/validation-message";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { QueryKeys } from "@/data/queryKeys";
import { toast } from "@/components/ui/use-toast";

// const formSchema = z.object({
//   carRegNo: z.string().min(2, {
//     message: "Username must be at least 2 characters.",
//   }),
// });

const userNameSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
});

// Schema for IAdmin
export const adminZodSchema = z.object({
  name: userNameSchema,
  profileImage: z.string().url().optional(),
  // dateOfBirth: z.coerce.date(),
  // email: z.string().email("Invalid email format"),
  socialSecurityNo: z
    .string()
    .min(9, "Social Security Number must be at least 9 characters"),
  contactNo: z.string().min(10, "Contact number must be at least 10 digits"),
  role: z.enum(["admin", "super_admin"]),
});

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
    admin: adminZodSchema,
    confirmPassword: z.string().min(1, "Bekreft passordet er påkrevd"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passordene samsvarer ikke",
  });

const AdminList = () => {
  const queryClient = useQueryClient();
  // const router = useRouter();
  const { mutate: createMutation, isPending: createIsPending } = useMutation({
    mutationFn: async (data: any) => {
      const res = await axiosInstance.post(`/users/create-admin`, data);
      return res;
    },
    onSuccess: (res: any) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.ADMIN],
      });

      if (res.success) {
        toast({
          variant: "default",
          title: "Admin Creation Successful",
          description: "New Admin Created SuccessFully",
        });

        // router.push("/login");
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
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    createMutation(values);
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
                name="admin.name.firstName"
                labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
                inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-6"
              />
              <FormFloatingInput
                label="Etternavn"
                name="admin.name.lastName"
                labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
                inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-6"
              />
            </div>
            <div className="flex gap-x-5 [&>div]:basis-1/2">
              <FormFloatingInput
                label="Personnummer"
                name="admin.socialSecurityNo"
                labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
                inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-6"
              />
              {/* <FormFloatingInput
                label="Rolle"
                name="rolle"
                labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
                inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-6"
              /> */}
              <FormFloatingSelect
                name="admin.role"
                label="Rolle"
                options={[
                  { label: "Super Admin", value: "super_admin" },
                  { label: "Admin", value: "admin" },
                ]}
                labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
                selectClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-6"
              />
            </div>
            <FormFloatingInput
              label="Mobilnummer"
              name="admin.contactNo"
              labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
              inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-6"
            />
            <FormFloatingInput
              label="Din e-post*"
              name="email"
              labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
              inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-6"
            />
            <FormFloatingInput
              label="Passord*"
              name="password"
              labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
              inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-6"
            />
            <FormFloatingInput
              label="Gjenta passord*"
              name="confirmPassword"
              labelClassName="ml-4 text-base top-1 peer-focus:top-1 text-lg text-black"
              inputClassName="rounded-full focus:border-[#6BA5B8] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto py-4 text-lg pl-6"
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

              <ValidationMessage validations={validations} />
              {/* <div className="text-black">
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
              </div> */}
              <div className="mt-8">
                <Button
                  type="submit"
                  disabled={createIsPending}
                  className="text-xl font-inter bg-[#263238] px-32 h-auto py-4 rounded-full mt-6"
                >
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
