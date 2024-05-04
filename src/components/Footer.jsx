/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img src="/logo.svg" alt="" />
            </Link>
            <p className="my-8 text-Black/75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex items-center gap-6">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-gray-800" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-gray-800" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-gray-800" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-gray-800" />
            </div>
          </div>

          {/* Catalog */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CATALOG</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-gray-800">
                Necklaces
              </Link>
              <Link to="/" className="text-sm block hover:text-gray-800">
                Hoodies
              </Link>
              <Link to="/" className="text-sm block hover:text-gray-800">
                Jewelry Box
              </Link>
              <Link to="/" className="text-sm block hover:text-gray-800">
                T-shirt
              </Link>
              <Link to="/" className="text-sm block hover:text-gray-800">
                Jacket
              </Link>
            </div>
          </div>

          {/* CUSTOMER SERVICES */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-gray-800">
                Contact Us
              </Link>
              <Link to="/" className="text-sm block hover:text-gray-800">
                Track Your Order
              </Link>
              <Link to="/" className="text-sm block hover:text-gray-800">
                Product Care & Repair
              </Link>
              <Link to="/" className="text-sm block hover:text-gray-800">
                Book an Appointment
              </Link>
              <Link to="/" className="text-sm block hover:text-gray-800">
                Shipping & Returns
              </Link>
            </div>
          </div>

          {/* ABOUT US */}
          <div className="text-Black">
            <h4 className="font-semibold mb-3">ABOUT US</h4>
            <div className="space-y-2">
              <Link to="/" className="text-sm block hover:text-gray-800">
                Our Producers
              </Link>
              <Link to="/" className="text-sm block hover:text-gray-800">
                Sitemap
              </Link>
              <Link to="/" className="text-sm block hover:text-gray-800">
                FAQ
              </Link>
              <Link to="/" className="text-sm block hover:text-gray-800">
                About Us
              </Link>
              <Link to="/" className="text-sm block hover:text-gray-800">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-Black flex flex-col md:flex-row items-center justify-around">
      <p className="text-white text-center items-center py-3">© {currentYear} Dhaka, Bangladesh.</p>
      <div>
        <img src="/public/icons_payment 1.png" alt="" />
     </div> 
       <div>
        <button onClick={scrollTop} className="text-white text-xl flex gap-3 items-center">Back to Scroll <FaArrowUp className="text-xl" /> </button>
       </div>
      </div>
    </footer>
  );
};

export default Footer;