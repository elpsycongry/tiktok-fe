import Login from "./pages/Login/login";
import "./App.scss"
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/home";
function App() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default App;
