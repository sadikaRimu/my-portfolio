import Home from "../components/Home/Home";
import Resume from "../components/Resume/Resume";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/resume',
                element: <Resume></Resume>
            }
        ]
    }
]);
export default router;