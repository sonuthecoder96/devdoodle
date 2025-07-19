import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <div>
      <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
        <ParticlesBackground />
      </div>
 
      <Header />

      <main className="flex-grow min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : null;
};

export default App;
