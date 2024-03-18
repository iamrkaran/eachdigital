"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition ease-in-out delay-300 scroll-smooth ${sticky ? "backdrop-blur-md shadow-md top-0 bg-[#3d4d6a] text-white" : "bg-[#37517e] text-white"}`}>
        <div className="w-full h-full flex flex-row items-center justify-between m-auto ">
          <div className="container">
            <div className="relative flex items-center justify-between">
              <div className="w-60 max-w-full ">
                <Link
                  href="/"
                  className="h-auto w-auto flex flex-row items-center my-1"
                >
                  <Image
                    src="/images/logo/logo.png"
                    alt="logo"
                    width={90}
                    height={90}
                    className="cursor-pointer hover:animate-slowspin"
                  />
                </Link>
              </div>
              <div className="flex w-full items-center justify-between px-4">
                <div>
                  <button
                    onClick={navbarToggleHandler}
                    id="navbarToggler"
                    aria-label="Mobile Menu"
                    className="absolute right-[1px] top-1/2 block translate-y-[-50%] rounded-lg mt-1 py-[6px] ring-primary focus:ring-2 lg:hidden"
                  >
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300  ${navbarOpen ? " top-[7px] rotate-45" : " "
                        }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300  ${navbarOpen ? "opacity-0 " : " "
                        }`}
                    />
                    <span
                      className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300  ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                        }`}
                    />
                  </button>
                  <nav
                    id="navbarCollapse"
                    className={`navbar absolute right-0 z-30 w-[250px] rounded bg-background border border-[#2A0E61] py-4 px-6 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                        ? "visibility top-full opacity-100"
                        : "invisible top-[120%] opacity-0"
                      }`}
                  >
                    <ul className="block lg:flex lg:space-x-12">
                      {menuData.map((menuItem, index) => (
                        <li key={menuItem.id} className="group relative">
                          {menuItem.path ? (
                            <Link
                              href={menuItem.path}
                              className={`flex pt-2 text-base font-serif tracking-wider group-hover:opacity-70 ${navbarOpen ? "text-gray-600 font-semibold" : "text-white"
                                } `}
                            >
                              {menuItem.title}
                            </Link>

                          ) : (
                            <>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <div className="flex items-center justify-end pr-16 lg:pr-0 gap-4">
                  <Link
                    href="/auth/login"
                    className="hidden md:block px-5 text-sm font-serif py-2 rounded-xl border-2 border-solid border-[#47b2e4] font-semibold hover:bg-[#31a9e1] transition ease-in-out delay-150"
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/auth/signup"
                    className="hidden px-5 py-[10px] text-sm font-semibold font-serif bg-gradient-to-r from-purple-500 to-primary hover:bg-gradient-to-l text-center rounded-sm max-w-[200px] transition-all md:block"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
