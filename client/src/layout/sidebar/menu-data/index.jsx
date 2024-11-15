import {
    LayoutDashboard,
    Box,
    User,
    ShoppingBag,
    Settings,
    Grid,
    PlusCircle
} from "lucide-react";

const menu = [
    { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    {
        icon: Box,
        label: "Products",
        submenu: [
            { to: "/products/manage", label: "Manage Products" },
            { to: "/products/add-new", icon: PlusCircle, label: "Add New Product" },
        ],
    },
    { to: "/customers", icon: User, label: "Customers" },
    { to: "/orders", icon: ShoppingBag, label: "Orders" },
    {
        icon: Grid,
        label: "Category",
        submenu: [
            { to: "/category/manage", label: "Manage Category" },
            { to: "/category/add-new", icon: PlusCircle, label: "Add New Category" },
        ],
    },
    { to: "/settings", icon: Settings, label: "Settings" },
];

export default menu;
