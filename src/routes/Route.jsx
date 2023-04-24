import {Navigate, createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsDetailsLayout from "../Layout/NewsDetailsLayout";
import News from "../pages/News/News/News";
const router = createBrowserRouter([
 {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: 'login',
                // element: <Login></Login>
            },
            {
                path: 'register',
                // element: <Register></Register>
            }
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    }, 
    {
        path: 'news', 
        element: <NewsDetailsLayout/>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);
export default router;
  