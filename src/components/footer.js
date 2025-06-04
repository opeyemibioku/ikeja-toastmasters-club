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
              <li className="text-white">
                <a
                  href="https://maps.app.goo.gl/2TnGJomZTGpzcL8K7"
                  target="_blank"
                >
                  Lagos Energy Academy
                </a>
              </li>
              <li className="text-white">GRA, Ikeja, Lagos, Nigeria</li>
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
              <a href="/contact">
                {" "}
                <li className="text-white">Contact</li>
              </a>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4 text-white">External Links</h4>
            <ul class="list-none space-y-2">
              <li className="text-white">
                <a
                  href="https://www.toastmasters.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Toastmasters International
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul class="list-none space-y-2">
              <li className="text-white">
                <a href="tel:+2348060435075">08060435075</a>
              </li>
              <li className="text-white">Mon to Fri; 3pm - 5pm</li>
              <li className="text-white">
                <a href="mailto:ikejatoastclub@gmail.com">
                  {" "}
                  ikejatoastclub@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div class="flex flex-col justify-end">
            <div class="flex items-center space-x-4">
              <h4 class="text-lg font-bold text-white">Get in Touch</h4>
              <div class="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1Kp3BbKbQp/?mibextid=qi2Omg"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-gray-900"
                >
                  <img src={fb} />
                </a>
                <a
                  href="https://x.com/ikejatmnigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-gray-900"
                >
                  <img src={x} />
                </a>
                <a
                  href="https://www.linkedin.com/company/ikejatoastmasters/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-gray-900"
                >
                  <img src={linkedin} />
                </a>
                <a
                  href="https://www.instagram.com/p/DGL-R3QstVf/?igsh=MTdkN3ZyZnZ5ZWt2dg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-gray-900"
                >
                  <img src={ig} />
                </a>
                <a
                  href="https://www.youtube.com/@IkejaToastmastersClub"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 hover:text-gray-900"
                >
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
              © Copyright 2025 Ikeja Toastmasters. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
