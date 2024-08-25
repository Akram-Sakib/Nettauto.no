import { NavItem } from "@/types";

export const headerNavLinks = [
    { href: "/", title: "Hjem" },
    { href: "/infosenter", title: "Infosenter" },
    { href: "/dealers", title: "Hvordan fungerer det" },
];

export const navItems: NavItem[] = [
    {
        title: "Dashboard",
        href: "/dashboard",
        label: "Dashboard",
    },
    {
        title: "Kunder for godkjenninger",
        href: "/dashboard/notification",
        label: "Notification",
    },
    {
        title: "Bedriftskunder",
        href: "/dashboard/business-customer",
        label: "Business Customer",
    },
    {
        title: "Annonser",
        href: "/dashboard/advertisements",
        label: "Advertisements",
    },
    {
        title: "Endt auksjoner",
        href: "/dashboard/end-of-auctions",
        label: "End Of Auctions",
    },
    {
        title: "Admin liste",
        href: "/dashboard/admin-list",
        label: "Admin List",
    },
    // seller
    {
        title: "Mine auksjoner",
        href: "/dashboard/my-auctions",
        label: "My auctions",
    },
    {
        title: "Solgte biler",
        href: "/dashboard/sold-cars",
        label: "Sold cars",
    },
    {
        title: "Varsler",
        href: "/dashboard/alerts",
        label: "Alerts",
    },

]