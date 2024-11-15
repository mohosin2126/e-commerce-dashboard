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
    { to: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
    {
        icon: Box,
        label: "Products",
        submenu: [
            { to: "/admin/products/manage", label: "Manage Products" },
            { to: "/admin/products/add-new", icon: PlusCircle, label: "Add New Product" },
        ],
    },
    { to: "/admin/customers", icon: User, label: "Customers" },
    { to: "/admin/orders", icon: ShoppingBag, label: "Orders" },
    {
        icon: Grid,
        label: "Category",
        submenu: [
            { to: "/admin/category/manage", label: "Manage Category" },
            { to: "/admin/category/add-new", icon: PlusCircle, label: "Add New Category" },
        ],
    },
    { to: "/admin/settings", icon: Settings, label: "Settings" },
];

export default menu;
