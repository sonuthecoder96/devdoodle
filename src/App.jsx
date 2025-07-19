import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ParticlesBackground from "./components/ParticlesBackground";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const currentUser = await authService.isLogin();
        if (currentUser) {
          dispatch(login(currentUser));
        } else {
          dispatch(logout());
        }
      } catch (err) {
        console.log(`Error while getting login user: ${err}`);
      } finally {
        setLoading(false);
      }
    };
    getCurrentUser();
  }, [dispatch]);

  return !loading ? (
    <div className="relative min-h-screen flex flex-col">
      {/* Particle Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <ParticlesBackground />
      </div>

      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  ) : null;
};

export default App;
