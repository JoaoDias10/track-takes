import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Albums from "../pages/Albums";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
    </Routes>
);

export default AppRoutes;