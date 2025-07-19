import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
const Footer = () => {
  return (
    <footer className="w-full py-4 mt-auto bg-gradient-to-r from-black via-gray-900 to-black text-center text-white text-sm tracking-wide">
      <p>
        Made with <span className="text-red-500">❤️</span> by{" "}
        <span className="font-semibold gradient-text">Sonuthecoder96</span>
      </p>
    </footer>
  );
}

export default Footer