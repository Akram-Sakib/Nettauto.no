import { NavItem } from "@/types";

export const headerNavLinks = [
    { href: "/", title: "Hjem" },
    { href: "/infosenter", title: "Infosenter" },
    { href: "/dealers", title: "Hvordan fungerer det" },
];

export const navItems = (role: string): NavItem[] => [
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
    {
        title: "Legg til valg i annonser",
        href: "/dashboard/add-choices-to-ads",
        label: "Add Choices To Ads",
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
    {
        title: "Innstillinger",
        href: "/dashboard/innstillinger",
        label: "Innstillinger",
    },
    {
        title: "Logout",
        label: "logout",
    },
].filter(item => {
    if (role === "seller") {
        const renderPages = ["Mine auksjoner", "Solgte biler", "Varsler", "Innstillinger", "Logout"];
        return renderPages.includes(item.title);
    } else if (role === "buyer") {
        const renderPages = ["Bedriftskunder", "Varsler", "Innstillinger", "Logout"];
        return renderPages.includes(item.title); // Hide only Membership for admin
    }
    else if (role === "admin") {
        // Kunder for godkjenninger
        // "Varsler"
        return item.title !== "Membership"; // Hide only Membership for admin
    }
    return true; // Show all items for other roles
});

export const AUTH_KEY = "accessToken";
export const ACCESS_TOKEN_KEY = "nettauto-access-token";