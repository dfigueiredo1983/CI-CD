import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Login from "../pages/Login";
import Produtos from "../pages/Produtos";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/produtos" element={<PrivateRoute><Produtos /></PrivateRoute>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default AppRoutes;
