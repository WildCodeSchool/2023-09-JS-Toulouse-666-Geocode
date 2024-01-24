import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import ContactPage from "../components/user/ContactPage/ContactPage";
import LoginPage from "../components/user/LoginPage/LoginPage";
import ChargingStationManagement, {
  fetchdata,
} from "../pages/ChargingStationManagement";
import Map from "../components/map/map";
import RegistrationForm from "../components/user/RegistrationPage/RegistrationForm";
import Home from "../pages/home/Home";
import Logout from "../pages/Logout";
import Profil from "../components/profil/Profil";

function AppRoutes() {
  return (
    <Routes>
      {/* routes pour l'utilisateur ou visiteur  */}
      <Route element={<RootLayout />} path="/" id="rootlayout">
        <Route index element={<Home />} />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<Logout />} path="/logout" />
        <Route element={<RegistrationForm />} path="/signup" />
        <Route element={<Map />} path="/map" />
        <Route element={<Profil />} path="/profil" />
      </Route>

      {/* routes pour l'administrateur */}
      <Route
        element={<ChargingStationManagement />}
        path="/admin/charging-station"
        loader={fetchdata}
      />
    </Routes>
  );
}

export default AppRoutes;
