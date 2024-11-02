import {createBrowserRouter, Navigate} from "react-router-dom";
import adminRoutes from "@/routes/admin/index.jsx";
import ErrorPage from "@/views/common/not-found/index..jsx";

const routes = [
    {
        path: "",
        element: <Navigate replace to="/admin" />
    },
    {
        path: "*",
        element: <ErrorPage />
    },
    ...adminRoutes,
]

const router = createBrowserRouter(
    routes
);

export default router;