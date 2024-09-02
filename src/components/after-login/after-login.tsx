"use client";

import { QueryKeys } from "@/data/queryKeys";
import { axiosInstance } from "@/helpers/axios/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "../ui/use-toast";

const AfterLogin = () => {
  const { data: initialData, isLoading: initialDataLoading } = useQuery({
    queryFn: async () => {
      const data = await axiosInstance.get(`/profile/me`);
      return data.data;
    },
    queryKey: [QueryKeys.PROFILE],
  });

  const contactName = initialData?.companyName;

  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate: update, isPending: createIsPending } = useMutation({
    mutationFn: async (data: any) => {
      const res = await axiosInstance.patch(`/profile/me/update`, data);
      return res;
    },
    onSuccess: (res: any) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.PROFILE],
      });

      if (res.success) {
        toast({
          variant: "default",
          title: "Registration Successful",
          description: "Updated Profile",
        });

        router.push("/my-auctions");
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

  const handleSeller = (): void => {
    update({
      isSeller: true,
      activeAs: "seller",
    });
  };

  return (
    <section>
      <div className="flex justify-between h-screen">
        <div className="w-1/2 relative h-full">
          <div className="mt-7 pl-36 fixed">
            <Image src={"/logo.png"} alt="Logo" width={400} height={57} />
            <h3 className="font-neulis text-2xl font-semibold text-navyblue mt-10 ml-10">
              Velkommen, ({contactName})
            </h3>
          </div>
          <h3 className="text-black font-neulis font-semibold mr-4 absolute right-0 top-1/2 bottom-1/2 xl:text-3xl lg:text-xl 2xl:text-5xl">
            HVA ØNSKER{" "}
          </h3>
          {/* selge img side  */}
          <div className="flex flex-col justify-center items-center gap-y-4 h-full">
            <Image
              src={"/selge.png"}
              alt="Anne"
              width={294}
              height={300}
              className="2xl:w-[294px] 2xl:h-[300px] lg:w-[150px] lg:h-[170px] cursor-pointer"
              onClick={handleSeller}
            />
            <h3 className="font-bold font-roboto xl:text-3xl lg:text-xl 2xl:text-5xl">
              SELGE
            </h3>
          </div>
        </div>
        <div className="w-1/2 bg-[#06063E] h-full relative">
          <h1 className="font-neulis text-white xl:text-3xl lg:text-xl 2xl:text-5xl ml-4 font-semibold mr-4 absolute left-0 top-1/2 bottom-1/2">
            DU Å GJØRE?{" "}
          </h1>
          {/* selge img side  */}
          <div className="flex flex-col justify-center items-center gap-y-4 h-full">
            <Image
              src={"/kjope.png"}
              alt="Anne"
              width={294}
              height={300}
              className="2xl:w-[294px] 2xl:h-[300px] lg:w-[150px] lg:h-[170px] cursor-pointer"
            />
            <h3 className="xl:text-3xl lg:text-xl 2xl:text-5xl font-bold font-roboto text-white">
              KJØPE
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AfterLogin;
