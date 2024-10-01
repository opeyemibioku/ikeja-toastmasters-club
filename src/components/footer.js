// internal import
import toastmasterslogo from "../assets/toastmasters-logo.png";
import fb from "../assets/fb.svg";
import x from "../assets/x.svg";
import linkedin from "../assets/linkedin.svg";
import ig from "../assets/ig.svg";
import youtube from "../assets/youtube.svg";

export const Footer = () => {
  return (
    <>
      <footer class="py-8" style={{ backgroundColor: "rgba(0, 65, 101, 0.9)" }}>
        {/* <footer class="bg-[#004165] py-8" style={{ backgroundColor: 'rgba(0, 65, 101, 0.9)' }}> */}
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
          <div>
            <h4 class="text-lg font-bold mb-4 text-white">
              Meeting Place Address
            </h4>
            <ul class="list-none space-y-2">
              <li className="text-white">13, Walter Carrington</li>
              <li className="text-white">Victoria Island</li>
              <li className="text-white">Lagos</li>
              <li className="text-white">Nigeria</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4 text-white">Extra Navigation</h4>
            <ul class="list-none space-y-2">
              <a href="/">
                {" "}
                <li className="text-white">Home</li>
              </a>
              <a href="/members">
                {" "}
                <li className="text-white">Become a member</li>
              </a>
              <a href="/blog-main">
                {" "}
                <li className="text-white">News & Articles</li>
              </a>
              <a href="/about">
                {" "}
                <li className="text-white">About us</li>
              </a>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4 text-white">External Links</h4>
            <ul class="list-none space-y-2">
              <li className="text-white">Toastmasters International</li>
              <li className="text-white">Eagles Toastmasters</li>
              <li className="text-white">Broadway Toastmasters</li>
              <li className="text-white">Navant</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul class="list-none space-y-2">
              <li className="text-white">13, Walter Carrington</li>
              <li className="text-white">Victoria Island</li>
              <li className="text-white">Lagos</li>
              <li className="text-white">Nigeria</li>
              <a href="/contact">
                {" "}
                <li className="text-white">Contact</li>
              </a>
            </ul>
          </div>

          <div class="flex flex-col justify-end">
            <div class="flex items-center space-x-4">
              <h4 class="text-lg font-bold text-white">Get in Touch</h4>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  <img src={fb} />
                </a>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  <img src={x} />
                </a>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  <img src={linkedin} />
                </a>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  <img src={ig} />
                </a>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  <img src={youtube} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#004165] py-2">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
          {/* Logo and Title for small screens */}
          <div className="flex items-center space-x-2 sm:hidden mb-2">
            <img src={toastmasterslogo} alt="Company Logo" className="h-8" />
            <span className="text-lg font-bold text-white">
              IKEJA TOASTMASTERS
            </span>
          </div>

          {/* Logo and Title for larger screens */}
          <div className="hidden sm:flex items-center space-x-2">
            <img src={toastmasterslogo} alt="Company Logo" className="h-8" />
            <span className="text-lg font-bold text-white">
              IKEJA TOASTMASTERS
            </span>
          </div>

          <div className="flex flex-col items-end space-y-1">
            <div className="flex space-x-4 text-gray-600">
              <a href="#" className="hover:text-gray-900 text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900 text-white">
                Terms and Conditions
              </a>
            </div>
            <span className="text-sm text-gray-600 text-white">
              © Copyright 2024 Ikeja Toastmasters. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
