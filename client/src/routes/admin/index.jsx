import { Navigate } from "react-router-dom";
import AdminDashboard from "@/views/admin/dashboard/index.jsx";
import Layout from "@/layout/index.jsx";
import AllProducts from "@/views/admin/products/all/index.jsx";
import AddProduct from "@/views/admin/products/add/index.jsx";
import AllCustomers from "@/views/admin/customers/all/index.jsx";
import AllOrders from "@/views/admin/orders/all/index.jsx";
import AllCategory from "@/views/admin/category/all/index.jsx";
import AddCategory from "@/views/admin/category/add/index.jsx";
import Settings from "@/views/admin/settings/index.jsx";

const adminRoutes = [
    {
        path: "/admin/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Navigate replace to="dashboard" />,
            },
            {
                path: "dashboard",
                element: <AdminDashboard />,
            },
            {
                path: "products/manage",
                element: <AllProducts />,
            },
            {
                path: "products/add-new",
                element: <AddProduct />,
            },
            {
                path: "customers",
                element: <AllCustomers />,
            },
            {
                path: "orders",
                element: <AllOrders />,
            },
            {
                path: "category/manage",
                element: <AllCategory />,
            },
            {
                path: "category/add-new",
                element: <AddCategory />,
            },
            {
                path: "settings",
                element: <Settings/>,
            },
        ],
    },
];

export default adminRoutes;
