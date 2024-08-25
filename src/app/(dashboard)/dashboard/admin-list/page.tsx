import AdminCard from "@/components/admin-list-page/admin-card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusCircle } from "lucide-react";

const AdminList = () => {
  return (
    <ScrollArea className="h-full pl-6 m-10 ">
      <div className="mb-6 space-y-8">
        <h2 className="text-2xl font-bold tracking-tight">Admin list</h2>
        <Button className="rounded-full px-8 bg-white space-x-4 font-medium py-2 h-auto">
          <span className="text-[#0B5F7C] text-base">New user</span>
          <PlusCircle className="mr-2 h-7 w-7 text-[#0B5F7C]" />
        </Button>
      </div>
      <div className="flex-1 space-y-10 p-4 md:p-8 pt-6 bg-white rounded-2xl">
        <div className="flex items-center justify-between"></div>

        <div className="space-y-10 mt-10">
          <AdminCard />
          <AdminCard />
          <AdminCard />
        </div>
      </div>
    </ScrollArea>
  );
};

export default AdminList;
