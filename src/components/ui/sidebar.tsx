import { cn } from "@/lib/utils";
import { navItems } from "@/data/constants";
import { DashboardNav } from "./dashboard-nav";
import Image from "next/image";

// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export default async function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("py-16 text-white", className)}>
      <div className="space-y-4 py-4">
        <div className="py-2">
          <div className="px-3">
            <Image
              src={"/nettauto-dashboard-logo.png"}
              alt="Logo"
              width={280}
              height={35}
            />
          </div>

          <div className="space-y-1 mt-12">
            <DashboardNav items={navItems} />
          </div>

          {/* <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea> */}
        </div>
      </div>
    </div>
  );
}
