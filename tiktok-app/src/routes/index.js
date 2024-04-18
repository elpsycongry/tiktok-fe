import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload/upload";
import Search from "../pages/Search";
import Login from "../pages/Login/login";
import {DefaultLayout, HeaderOnly, NoHeader} from "../component/Layout";
const publicRoutes = [
    {path: '/home', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/search', component: Search, layout: null}
];

const privateRoutes = [

]
export {publicRoutes, privateRoutes}