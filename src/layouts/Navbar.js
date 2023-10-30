import React, { useState } from "react";
import { Link } from "react-router-dom";

let Navbar = () => {
  //local state
  let [flag, setFlag] = useState({
    proprt: "hidden",
  });

  //event handller function
  let clickNavToggle = () => {
    setFlag({
      proprt: flag.proprt === "hidden" ? "block" : "hidden",
    });
  };

  //event handller function
  let clickOnPage = () => {
    setFlag({
      proprt: "hidden",
    });
  };

  return (
    <React.Fragment>
      <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <button
                type="button"
                onClick={clickNavToggle}
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            <div className="sm:w-full hidden sm:block">
              <div className="flex justify-between">
                <div className="flex">
                  <Link
                    to="/"
                    class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    FireBase
                  </Link>
                  <Link
                    to="/signup"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Signup
                  </Link>
                  <Link
                    to="/signin"
                    class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                  >
                    Signin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`sm: ${flag.proprt} h-screen id="mobile-menu"`}>
          <div class="space-y-1 px-2 pb-3 pt-2">
            <div>
              <div className="pl-3">
                <Link
                  onClick={clickOnPage}
                  to="/signup"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Signup
                </Link>
                <Link
                  onClick={clickOnPage}
                  to="/signin"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
                >
                  Signin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
