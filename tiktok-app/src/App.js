import "./App.scss"
import {Route, Routes} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import {ProtectedRoute} from "./context/protectRouter";
import {Secret} from "./context/Secret";
import Login from "./pages/Login/login";

function App() {

    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="/secret"
                    element={
                        <ProtectedRoute>
                            <Secret />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AuthProvider>
    );
}

export default App;
