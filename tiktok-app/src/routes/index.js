import Home from "../pages/Home";
import Following from "../pages/Following";
import Profile from "../pages/Profile";
import Upload from "../pages/Upload/upload";
import Search from "../pages/Search";
import {HeaderOnly} from "../component/Layout";

const publicRoutes = [
    {path: '/home', component: Home},
    {path: '/following', component: Following},
    {path: '/profile', component: Profile},
    {path: '/upload', component: Upload},
    {path: '/search', component: Search, layout: null}
];

const privateRoutes = [

]
export {publicRoutes, privateRoutes}