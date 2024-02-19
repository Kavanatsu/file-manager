import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Folders from "./pages/Folders.jsx";
import Register from "./pages/Register.jsx";
import Auth from "./pages/Auth.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
				errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element : <Folders/>
            },
            {
                path: "/register",
                element : <Register/>
            },
            {
                path: "/auth",
                element : <Auth/>
            }
        ]
    }
])

export default router