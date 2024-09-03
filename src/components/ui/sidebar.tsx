import { cn } from "@/lib/utils";
import { navItems } from "@/data/constants";
import { DashboardNav } from "./dashboard-nav";
import Image from "next/image";
import { DashboardCard } from "./dashboard-card";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

// import { Playlist } from "../data/playlists";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  // playlists: Playlist[];
}

export default async function Sidebar({ className }: SidebarProps) {
  // const session = (await getServerSession(authOptions)) as any;
  // const role = session?.role;
  const role = "seller";

  return (
    <div className={cn("py-16 text-white", className)}>
      <div className="space-y-4 py-4">
        <div className="py-2">
          <div className="px-3">
            <Link href="/">
              <Image
                src={"/nettauto-dashboard-logo.png"}
                alt="Logo"
                width={280}
                height={35}
              />
            </Link>
          </div>

          <div className="space-y-1 mt-12">
            <DashboardNav items={navItems(role)} />
          </div>
          <div className="flex justify-center">
            <DashboardCard />
          </div>
        </div>
      </div>
    </div>
  );
}
