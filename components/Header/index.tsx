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
    if (window.scrollY >= 80) {
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
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full h-20 items-center bg-transparent ${
          sticky
            ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative mx-8 flex items-center justify-between">
            <Link 
              href="/"
              className="w-fit sm:w-80 max-w-full flex gap-2 cursor-pointer">
              <div
                className={`header-logo block w-8 h-8 ${
                  sticky ? "pb-5 lg:pb-2" : "pb-8"
                } `}
              >
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={40}
                  height={40}
                />
              </div>
              <p className="hidden sm:flex text-[rgba(2,8,23,1)] text-2xl font-medium">CreateMyToken</p>
            </Link>
            <div className="flex w-full items-center justify-center px-4">
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-[-2.5rem] top-1/2 block translate-y-[-50%] rounded-lg p-2 xl:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[20px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[7px] rotate-45" : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[20px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[20px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
              <ul className="hidden xl:flex justify-center gap-10 w-full">
                {menuData.map((menuItem, index) => (
                  <li key={menuItem.id} className="!m-0">
                    <Link
                      href={menuItem.path}
                      className={`flex justify-center text-center gap-2 py-2 text-sm text-[rgba(2,8,23,1)] group-hover:opacity-70 xl:mr-0 xl:inline-flex xl:py-6 xl:px-0`}
                    >
                      <Image
                        src={menuItem.img}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                      <p className="flex justify-center items-center font-medium text-[rgba(2,8,23,1)] text-sm">{menuItem.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-[-35px] z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white py-4 px-6 duration-300 xl:visible xl:static xl:w-auto xl:border-none xl:!bg-transparent xl:p-0 xl:opacity-100 ${
                  navbarOpen
                    ? "visibility top-[140%] opacity-100"
                    : "invisible top-[140%] opacity-0"
                }`}
              >
                <ul className="block xl:hidden xl:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={menuItem.id} className="group relative">
                      <Link
                        href={menuItem.path}
                        className={`flex justify-start text-center gap-2 py-2 text-sm text-[rgba(2,8,23,1)] group-hover:opacity-70 xl:mr-0 xl:inline-flex xl:py-6 xl:px-0`}
                      >
                        <Image
                          src={menuItem.img}
                          alt="logo"
                          width={24}
                          height={24}
                        />
                        <p className="flex justify-start items-center font-medium text-[rgba(2,8,23,1)] text-sm">{menuItem.title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <button
              className="min-w-[170px] py-3 px-4 text-base text-[rgba(248,250,252,1)] font-medium hover:opacity-70 flex gap-2 rounded-full bg-[rgba(37,99,235,1)]"
            >
              <Image
                src="/images/header/rocket.svg"
                alt="logo"
                width={24}
                height={24}
              />
              Create Token
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
