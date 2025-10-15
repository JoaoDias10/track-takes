import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Albums from "../pages/Albums";
import AlbumDetails from "../pages/AlbumDetails";

import Artists from "../pages/Artists";
import SoloArtists from "../pages/SoloArtists";
import SoloArtistDetails from "../pages/SoloArtistDetails";
import Bands from "../pages/Bands";
import BandDetails from "../pages/BandDetails";
import Groups from "../pages/Groups";
import GroupDetails from "../pages/GroupDetails";

import Genres from "../pages/Genres";

const AppRoutes = () => (
    <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Albums */}
        <Route path="albums">
            <Route index element={<Albums />} />
            <Route path=":slug" element={<AlbumDetails />} />
        </Route>

        {/* Artists */}
        <Route path="artists">
            <Route index element={<Artists />} />
            <Route path="solo-artists">
                <Route index element={<SoloArtists />} />
                <Route path=":slug" element={<SoloArtistDetails />} />
            </Route>
            <Route path="bands">
                <Route index element={<Bands />} />
                <Route path=":slug" element={<BandDetails />} />
            </Route>
            <Route path="groups">
                <Route index element={<Groups />} />
                <Route path=":slug" element={<GroupDetails />} />
            </Route>
        </Route>

        {/* Genres */}
        <Route path="genres" element={<Genres />} />
    </Routes>
);

export default AppRoutes;