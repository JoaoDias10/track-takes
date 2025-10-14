import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Albums from "../pages/Albums";
import Artists from "../pages/Artists";
import Genres from "../pages/Genres";
import AlbumDetails from "../pages/AlbumDetails";

const AppRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/genres" element={<Genres />} />
        <Route path="/album/:slug" element={<AlbumDetails />} />
    </Routes>
);

export default AppRoutes;