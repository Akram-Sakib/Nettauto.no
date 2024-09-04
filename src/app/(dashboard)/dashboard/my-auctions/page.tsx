"use client";

import Auctions from "@/components/my-auctions/auctions";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
  useQuery,
} from "@tanstack/react-query";
import { QueryKeys } from "@/data/queryKeys";
import { axiosInstance } from "@/helpers/axios/axiosInstance";
const MyAuctions = () => {
  // const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: [QueryKeys.CAR],
  //   queryFn: async () => {
  //     const car = await axiosInstance.get(`/cars`);
  //     return car?.data;
  //   },
  // });

  const { data: initialData, isLoading: initialDataLoading } = useQuery({
    queryFn: async () => {
      const data = await axiosInstance.get(`/cars/`);
      return data?.data;
    },
    queryKey: [QueryKeys.CAR],
  });

  let content = null;
  if (initialDataLoading) {
    content = <div>Loading...</div>;
  }
  if (!initialDataLoading && initialData?.length == 0) {
    content = <div>No Data Found.</div>;
  }
  if (!initialDataLoading && initialData?.length > 0) {
    content = <Auctions data={initialData} />;
  }

  return (
    <ScrollArea className="h-full bg-white pl-6 rounded-2xl">
      <div className="flex-1 space-y-20 p-4 md:p-8 pt-6">
        <div className="flex justify-end">
          <Link href="/dashboard/new-auction">
            <Button className="bg-[#FF003D] px-10">Ny auksjon</Button>
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-normal tracking-tight font-neulis">
            Mine <span className="text-primaryred">auksjoner</span>
          </h2>
        </div>
        {content}

        {/* <HydrationBoundary state={dehydrate(queryClient)}>
        </HydrationBoundary> */}
      </div>
    </ScrollArea>
  );
};

export default MyAuctions;
