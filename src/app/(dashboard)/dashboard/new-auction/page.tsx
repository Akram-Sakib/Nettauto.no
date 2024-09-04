"use client";

import { z } from "zod";

import FormButtonSelection from "@/components/form-elements/form-button-selection";
import FormEquipments from "@/components/form-elements/form-equipments";
import FormImages from "@/components/form-elements/form-images";
import FormInput from "@/components/form-elements/form-input";
import FormSelect from "@/components/form-elements/form-select";
import FormTextArea from "@/components/form-elements/form-textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "@/components/ui/use-toast";
import { QueryKeys } from "@/data/queryKeys";
import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import FormFiles from "@/components/form-elements/form-files";

// const imageSchema = z.object({
//   // lastModified: z.number(), // Validates that the 'url' field is a valid URL string
//   // lastModifiedDate: z.date().optional(), // Optional alt text field
//   // name: z.string().optional(), // Optional alt text field
//   // size: z.number().optional(), // Optional alt text field
//   // type: z.string().optional(), // Optional alt text field
//   // webkitRelativePath: z.string().optional(), // Optional alt text field
//   // Add more fields as needed
// });

const formSchema = z.object({
  carRegistrationNo: z.string().nonempty("Car registration number is required"),
  place: z.string().nonempty("Place is required"),
  description: z.string().nonempty("Description is required"),
  images: z.any(),
  // .nonempty("Images is Required")
  brand: z.string().nonempty("Brand is required"),
  model: z.string().nonempty("Model is required"),
  yearModel: z.string().nonempty("Year model is required"),
  kilometer: z.string().nonempty("Kilometer is required"),
  cylinderVolume: z.string().nonempty("Cylinder volume is required"),
  effect: z.string().nonempty("Effect is required"),
  color: z.string().nonempty("Color is required"),
  gearType: z.string().nonempty("Gear type is required"),
  operatingType: z.string().nonempty("Operating type is required"),
  minimumPrice: z.string().nonempty("Minimum price is required"),
  fuel: z.string().nonempty("Fuel type is required"),
  descriptionCondition: z
    .string()
    .nonempty("Condition description is required"),
  equipment: z.array(z.string().nonempty("Equipment is required")),
  pdfs: z.any(),
  auctionTime: z.string().nonempty("Auction time is required"),
});

const NewAuction = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const queryClient = useQueryClient();
  // const router = useRouter();
  const { mutate: create, isPending: createIsPending } = useMutation({
    mutationFn: async (data: any) => {
      const res = await axiosInstance.post(`/auctions/create-auction`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return res;
    },
    onSuccess: (res: any) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.CAR],
      });

      if (res.success) {
        toast({
          variant: "default",
          title: "New Car Auction Created Successfully",
          description: "Updated Profile",
        });

        // router.push("/dashboard/my-auctions");
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

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    const formData = new FormData();
    for (const key in values) {
      if (key === "images") {
        // Append each image individually
        values.images.forEach((image: any) => {
          formData.append("images", image.file);
        });
      } else if (key == "pdfs") {
        // Append each pdf individually
        values?.pdfs?.forEach((pdf: any) => {
          formData.append("pdfs", pdf);
        });
      } 
      else if (key === "equipment") {
        // Append equipment array
        values.equipment.forEach((item) => {
          formData.append("equipment[]", item);
        });
      } 
      else {
        formData.append(key, (values as any)[key]);
      }
    }
    // formData.append("images", values.images[0].file as Blob);
    create(formData);
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
            <div className="flex gap-x-8 [&>*>*>label]:text-lg">
              {/* <FormFiles
                name="images"
                label="File Upload"
                type="file"
                multiple
                placeholder="NA 12345"
                className="border-[#EBEBEB] py-6"
              /> */}
              <div className="basis-[25%]">
                <FormInput
                  name="carRegistrationNo"
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
                  name="description"
                  label="Kort beskrivelse "
                  placeholder="ACC/Coating/ Ny service"
                  className="border-[#EBEBEB] py-6"
                />
              </div>
            </div>
            {/* <Alert className="bg-[#E8F9FF] px-10 border-none py-6">
              <AlertDescription className="text-lg text-black text-center">
                Last opp bilder ved å klikke her
                <span className="text-primaryred"> Last opp</span>
              </AlertDescription>
            </Alert> */}
            <FormImages name="images" label="Images" />
            <div className="grid grid-cols-4 gap-8 [&>*>*>label]:text-lg">
              <div className="">
                <FormInput
                  name="brand"
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
                  name="yearModel"
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
                  name="cylinderVolume"
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
                  name="color"
                  label="Farge"
                  placeholder="Velg farge"
                  className="border-[#EBEBEB]"
                  options={[{ label: "Option 1", value: "Option Value" }]}
                />
              </div>
              <div className="">
                <FormSelect
                  name="gearType"
                  label="Girtype"
                  placeholder="Automat"
                  className="border-[#EBEBEB]"
                  options={[{ label: "Option 1", value: "Option Value" }]}
                />
              </div>
              <div className=""></div>
              <div className="[&>*>label]:text-lg">
                <FormSelect
                  name="operatingType"
                  label="Driftstype"
                  placeholder="Firehjulstrekk"
                  className="border-[#EBEBEB]"
                  options={[{ label: "Option 1", value: "Option Value" }]}
                />
              </div>
              <div className="[&>*>label]:text-lg">
                <FormSelect
                  name="minimumPrice"
                  label="Minimum pris"
                  placeholder="100 000 kr"
                  className="border-[#EBEBEB]"
                  options={[{ label: "Option 1", value: "Option Value" }]}
                />
              </div>
              <div className="[&>*>label]:text-lg">
                <FormSelect
                  name="fuel"
                  label="Drivstoff"
                  placeholder="Diesel"
                  className="border-[#EBEBEB]"
                  options={[{ label: "Option 1", value: "Option Value" }]}
                />
              </div>
            </div>
            <div className="[&>*>label]:text-lg">
              <FormTextArea
                name="descriptionCondition"
                label="Beskrivelse - tilstand og egenerklæring"
                placeholder="Legg inn"
              />
            </div>
            <FormEquipments
              label="Utstyr"
              name="equipment"
              equipments={[
                "Auxiliary heating",
                "Bluetooth",
                "CD player",
                "Central locking",
                "Auxiliary heating",
                "Bluetooth",
                "CD player",
                "Central locking",
                "Auxiliary heating",
                "Bluetooth",
                "CD player",
                "Central locking",
                "Auxiliary heating",
                "Bluetooth",
                "CD player",
                "Central locking",
              ]}
            />
            <div className="space-y-2">
              {/* <Label className="text-lg">Dokumenter</Label>
              <Alert className="bg-[#E8F9FF] px-10 border-none py-6">
                <AlertDescription className="text-lg text-black text-center">
                  Last opp dokumenter
                  <span className="text-primaryred">(PDF)</span>
                </AlertDescription>
              </Alert> */}
              <FormFiles name="pdfs" label="Dokumenter" />
            </div>
            <div className="space-y-4">
              {/* <Label className="text-lg text-navyblue block">
                Velg auksjonstid
              </Label> */}
              <FormButtonSelection
                name="auctionTime"
                label="Velg auksjonstid"
                options={["24 timer", "3 dager", "5 dager", "10 dager"]}
              />
              <div className="flex justify-center gap-x-5 !mt-10">
                <Button
                  type="submit"
                  className="text-xl font-medium hover:bg-[#008B65] bg-primaryred h-auto px-20 rounded-sm py-4"
                >
                  SEND FOR GODKJENNING
                </Button>
                <Button className="text-xl font-medium hover:bg-[#008B65] bg-[#0B5F7C] h-auto px-20 rounded-sm py-4">
                  Lagre som utkast
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </ScrollArea>
  );
};

export default NewAuction;
