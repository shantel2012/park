import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Navbars
import PublicNavbar from "./Components/Navbar/PublicNavbar";
import PrivateNavbar from "./Components/Navbar/PrivateNavbar";
import AdminNavbar from "./Components/Navbar/AdminNavbar";

// Public Pages
import Home from "./Pages/Home";
import Whychooseus from "./Pages/Whychooseus";
import Pricing from "./Pages/Pricing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Search from "./Pages/Search";
import ParkingDetails from "./Pages/ParkingDetails";
import BecomeHost from "./Pages/Private/BecomeHost";  // <-- NEW import

// Favorites shared for user and owner
import Favorites from "./Pages/Private/Favorites";

// User Pages (Private folder)
import UserDashboard from "./Pages/Private/UsersDashboard";
import Bookings from "./Pages/Private/Bookings";
import Profile from "./Pages/Private/Profile";

// Owner Pages (Owner folder)
import OwnerDashboard from "./Pages/Owner/OwnerDashboard";
import AddParking from "./Pages/Owner/AddParking";
import BookingRequests from "./Pages/Owner/BookingRequests";
import Earnings from "./Pages/Owner/Earnings";
import ManageListings from "./Pages/Owner/ManageListings";

// Admin Pages (Admin folder)
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AdminUsers from "./Pages/Admin/AdminUsers";
import AdminOwners from "./Pages/Admin/AdminOwners";
import AdminParking from "./Pages/Admin/AdminParking";
import AdminBookings from "./Pages/Admin/AdminBookings";
import AdminEarnings from "./Pages/Admin/AdminEarnings";

function App() {
  const [userRole, setUserRole] = useState("guest"); // guest, user, owner, admin

  const handleLogin = (role) => setUserRole(role);
  const handleLogout = () => setUserRole("guest");

  return (
    <>
      {/* Guest Navbar */}
      {userRole === "guest" && <PublicNavbar />}

      {/* User Navbar & Routes */}
      {userRole === "user" && (
        <>
          <PrivateNavbar onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<UserDashboard />} />
            <Route path="/dashboard/bookings" element={<Bookings />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<Search />} />
            <Route path="/parking/:id" element={<ParkingDetails />} />
            <Route path="/become-host" element={<BecomeHost />} /> {/* Added here */}

            {/* Block admin and owner routes */}
            <Route path="/admin/*" element={<Navigate to="/" replace />} />
            <Route path="/owner/*" element={<Navigate to="/" replace />} />

            {/* Catch all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
      )}

      {/* Owner Navbar & Routes */}
      {userRole === "owner" && (
        <>
          <PrivateNavbar onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<OwnerDashboard />} />
            <Route path="/owner/add-parking" element={<AddParking />} />
            <Route path="/owner/requests" element={<BookingRequests />} />
            <Route path="/owner/earnings" element={<Earnings />} />
            <Route path="/owner/manage-listings" element={<ManageListings />} />
            <Route path="/dashboard/bookings" element={<Bookings />} />
            <Route path="/dashboard/profile" element={<Profile />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/search" element={<Search />} />
            <Route path="/parking/:id" element={<ParkingDetails />} />
            <Route path="/become-host" element={<BecomeHost />} /> {/* Added here */}

            {/* Block admin and user routes */}
            <Route path="/admin/*" element={<Navigate to="/" replace />} />
            <Route path="/dashboard/*" element={<Navigate to="/" replace />} />

            {/* Catch all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </>
      )}

      {/* Admin Navbar & Routes */}
      {userRole === "admin" && (
        <>
          <AdminNavbar onLogout={handleLogout} />
          <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/owners" element={<AdminOwners />} />
            <Route path="/admin/parking" element={<AdminParking />} />
            <Route path="/admin/bookings" element={<AdminBookings />} />
            <Route path="/admin/earnings" element={<AdminEarnings />} />

            {/* Block user and owner routes */}
            <Route path="/*" element={<Navigate to="/admin" replace />} />
          </Routes>
        </>
      )}

      {/* Guest Routes */}
      {userRole === "guest" && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<Whychooseus />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/search" element={<Search />} />
          <Route path="/parking/:id" element={<ParkingDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Signup onLogin={handleLogin} />} />
          <Route path="/become-host" element={<BecomeHost />} /> {/* Added here */}

          {/* Redirect private/admin routes */}
          <Route path="/dashboard/*" element={<Navigate to="/login" replace />} />
          <Route path="/owner/*" element={<Navigate to="/login" replace />} />
          <Route path="/admin/*" element={<Navigate to="/login" replace />} />

          {/* Catch all */}
          <Route
            path="*"
            element={
              <h1 className="text-center mt-10 text-xl text-red-600">
                404 - Page Not Found
              </h1>
            }
          />
        </Routes>
      )}
    </>
  );
}

export default App;
