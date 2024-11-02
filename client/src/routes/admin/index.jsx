import { Navigate } from "react-router-dom";
import AdminDashboard from "@/views/admin/dashboard/index.jsx";
import Layout from "@/layout/index.jsx";

const adminRoutes = [
    {
        path: "/admin/",
        element: <Layout/>,
        children: [
            {
                path: "",
                element: <Navigate replace to="dashboard" />
            },
            {
                path: "dashboard",
                element: <AdminDashboard/>
            }
        ]
    }
]

export default adminRoutes;