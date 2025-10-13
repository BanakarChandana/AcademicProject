import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaPinterest,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t mt-10">
      <div className="max-w-7xl ml-10 mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Shop */}
        <div>
          <h3 className="font-semibold mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>VelvetKart</li>
            <li>SilkKart</li>
            <li>GeorgetteKart</li>
            <li>Srees</li>
            <li>Livin</li>
            <li>Skirts & Shorts</li>
            <li>Denim</li>
            <li>Shop by Body Type</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Decoding the Best Fit</li>
            <li>LivIn - The Limitless Pants</li>
            <li>FS Life - A House of Brands</li>
            <li>Store Locator</li>
            <li>Blogs</li>
            <li>FS Women</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold mb-4">Help</h3>
          <ul className="space-y-2 text-sm">
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Return & Exchange Policy</li>
            <li>Terms & Conditions</li>
            <li>Return/Exchange</li>
            <li>Order Status</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Social / Apps / Payment */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-3 text-xl">
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <FaFacebook className="cursor-pointer hover:text-blue-600" />
              <FaYoutube className="cursor-pointer hover:text-red-600" />
              <FaLinkedin className="cursor-pointer hover:text-blue-700" />
              <FaPinterest className="cursor-pointer hover:text-red-500" />
            </div>
          </div>

          

         
        </div>

        {/* Contact Info */}
        <div className="gap-10">
          <h2 className="text-xl font-bold mb-4">TreandyThreads</h2>
          <p className="text-sm">© 2024 TreandyThreads.com</p>
          <p className="text-sm mb-2">All Rights Reserved</p>

          <h3 className="font-semibold mb-2">CONTACT US</h3>
          <p className="text-sm">Ph No: 01143078400</p>
          <p className="text-sm mt-2">
            Fable Street Lifestyle Solutions Private Limited <br />
            362, Phase II, Udyog Vihar, Sector 20, Gurugram, Haryana 122016
          </p>
          <p className="text-sm mt-2">
            Timings: 09:30 AM to 06:30 PM, Mon to Sat
          </p>
          <p className="text-sm mt-2">
            For Info/Issues: <span className="text-blue-600">care@TreandyThreads.com</span>
          </p>
          <p className="text-sm">
            For Jobs: <span className="text-blue-600">careers@TreandyThreads.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
