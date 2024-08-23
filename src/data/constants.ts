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
        icon: "dashboard",
        label: "Dashboard",
    },
    {
        title: "Profile",
        href: "/dashboard/profile",
        icon: "profile",
        label: "profile",
    },
    {
        title: "Manage Admins",
        href: "/dashboard/manage-admins",
        icon: "admin",
        label: "manageAdmins",
    },
    // {
    //   title: "Users",
    //   href: "/dashboard/users",
    //   icon: "user",
    //   label: "users",
    // },
    {
        title: "Members",
        href: "/dashboard/members",
        icon: "user",
        label: "members",
    },
    // {
    //   title: "Gallery",
    //   href: "/dashboard/gallery",
    //   icon: "gallery",
    //   label: "gallery",
    // },
    // {
    //   title: "News",
    //   href: "/dashboard/news",
    //   icon: "news",
    //   label: "news",
    // },
    // {
    //   title: "Projects",
    //   href: "/dashboard/projects",
    //   icon: "kanbanSquare",
    //   label: "projects",
    // },
    {
        title: "Membership",
        href: "/dashboard/membership",
        icon: "cardMembership",
        label: "payments",
    },
    {
        title: "Places",
        href: "/dashboard/places",
        icon: "cityLocation",
        label: "places",
    },
    // {
    //   title: "Payments",
    //   href: "/dashboard/payment",
    //   icon: "banknote",
    //   label: "payments",
    // },
    {
        title: "Subscription",
        href: "/dashboard/subscription",
        icon: "banknote",
        label: "subscription",
    },
    {
        title: "Logout",
        icon: "login",
        label: "logout",
    },
]