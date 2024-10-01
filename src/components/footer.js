export const Footer = () => {
  return (
    <>
      <footer class="bg-gray-100 py-8">
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-0">
          <div>
            <h4 class="text-lg font-bold mb-4">Clothing</h4>
            <ul class="list-none space-y-2">
              <li>Tops</li>
              <li>Dresses</li>
              <li>Pants</li>
              <li>Denim</li>
              <li>Sweaters</li>
              <li>T-Shirts</li>
              <li>Jackets</li>
              <li>Activewear</li>
              <li>Browse All</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4">Accessories</h4>
            <ul class="list-none space-y-2">
              <li>Watches</li>
              <li>Wallets</li>
              <li>Bags</li>
              <li>Sunglasses</li>
              <li>Hats</li>
              <li>Belts</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4">Brands</h4>
            <ul class="list-none space-y-2">
              <li>Full Nelson</li>
              <li>My Way</li>
              <li>Re-Arranged</li>
              <li>Counterfeit</li>
              <li>Significant Other</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold mb-4">About Us</h4>
            <ul class="list-none space-y-2">
              <li>Our Story</li>
              <li>Careers</li>
              <li>Sustainability</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>

          <div class="flex flex-col justify-end">
            <div class="flex items-center space-x-4">
              <h4 class="text-lg font-bold">Get in Touch</h4>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.61 8.04 8.29 8.88v-6.28h-2.5v-2.6h2.5v-1.99c0-2.45 1.49-3.79 3.67-3.79 1.04 0 1.94.08 2.19.11v2.53h-1.5c-1.18 0-1.41.56-1.41 1.38v1.77h2.81l-.37 2.6h-2.43v6.28c4.68-.84 8.29-4.47 8.29-8.88 0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.61 8.04 8.29 8.88v-6.28h-2.5v-2.6h2.5v-1.99c0-2.45 1.49-3.79 3.67-3.79 1.04 0 1.94.08 2.19.11v2.53h-1.5c-1.18 0-1.41.56-1.41 1.38v1.77h2.81l-.37 2.6h-2.43v6.28c4.68-.84 8.29-4.47 8.29-8.88 0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
                <a href="#" class="text-gray-600 hover:text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 3.61 8.04 8.29 8.88v-6.28h-2.5v-2.6h2.5v-1.99c0-2.45 1.49-3.79 3.67-3.79 1.04 0 1.94.08 2.19.11v2.53h-1.5c-1.18 0-1.41.56-1.41 1.38v1.77h2.81l-.37 2.6h-2.43v6.28c4.68-.84 8.29-4.47 8.29-8.88 0-5.5-4.46-9.96-9.96-9.96z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="bg-gray-200 py-2">
        <div class="container mx-auto flex items-center justify-between px-4">
          <div class="flex items-center space-x-2">
            <img src="logo.png" alt="Company Logo" class="h-8" />
            <span class="text-lg font-bold">Ikeja Toastmasters</span>
          </div>

          <div class="flex flex-col items-end space-y-1">
            <div class="flex space-x-4 text-gray-600">
              <a href="#" class="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" class="hover:text-gray-900">
                Terms and Conditions
              </a>
            </div>
            <span class="text-sm text-gray-600">
              © Copyright 2024 Ikeja Toastmasters. All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
