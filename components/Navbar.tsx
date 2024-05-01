"use client";
import React, { useState } from "react";
import Link from "next/link";
// import logo from "@/logo.png";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { NavbarData } from "@/utlis/data";
import { NavbarItems } from "@/interfaces";
// import logo1 from "@/profilepic.jpeg";
import { ModeToggle } from "./Theme-Button";
import { signIn, useSession, signOut } from "next-auth/react";

const NavItem = ({ href, tags, onClick }: NavbarItems) => {
  return (
    <li className="hover:text-rose-700" onClick={onClick}>
      <Link href={href}>{tags}</Link>
    </li>
  );
};
const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openp, setOpenp] = useState<boolean>(false);
  const session = useSession();

  console.log(session);

  const handleProfClick: () => void = () => {
    setOpenp(!openp);
  };
  const handleMenuClick: () => void = () => {
    setOpen(!open);
  };
  return (
    <header className="bg-white fixed top-0 shadow-xl w-screen dark:bg-slate-900 z-[103]">
      <nav className="px-9 flex justify-between items-center w-screen sm:w-[80%] mx-[auto] my-0 h-20 ">
        <Link href="/">
          <div className="flex items-center text-xl font-bold">
            <Image
              src={require("@/public/logo.png")}
              alt="logo"
              height={50}
              width={50}
              className="rounded-lg h-[40px] w-[40px] sm:h-[40px] sm:w-[40px]"
            />
          </div>
        </Link>

        <div className="sm:hidden" onClick={handleMenuClick}>
          {open ? (
            <IoMdClose className="text-[2rem]" />
          ) : (
            <CgMenuRightAlt className="text-[2rem]" />
          )}
        </div>
        <div className="absolute right-20 z-5">
          <ModeToggle />
        </div>
        <div
          className={
            open
              ? "sm:hidden absolute top-0 left-0 h-screen w-[300px] flex justify-center items-center  backdrop-blur-[150px] rounded-2xl transition-all duration-900 shadow-lg"
              : "sm:hidden absolute top-0 left-[-100%] h-screen w-[300px] flex justify-center items-center  backdrop-blur-[1px] rounded-2xl transition-all duration-900 shadow-lg"
          }
        >
          <ul className="flex flex-col gap-[30px] ">
            {session.status === "authenticated" ? (
              NavbarData.map(({ href, tags }: NavbarItems) => (
                <NavItem
                  key={href}
                  href={href}
                  tags={tags}
                  onClick={handleMenuClick}
                />
              ))
            ) : (
              <li
                onClick={() => signIn("google")}
                className="bg-rose-500 cursor-pointer hover:bg-rose-800 rounded-xl px-4 py-2 text-white"
              >
                Sign in / Sign up
              </li>
            )}
            {session.status === "authenticated" && (
              <div
                onClick={handleProfClick}
                className="flex gap-2 font-bold text-rose-500 items-center cursor-pointer"
              >
                <Image
                  src={session.data.user?.image || require("@/public/logo.png")}
                  alt="Logo"
                  height={22}
                  width={25}
                  className="rounded-[100%] shadow-xl"
                />
                <h3>{session.data.user?.name}</h3>
              </div>
            )}
          </ul>
        </div>
        <ul
          className={
            openp
              ? "absolute z-[1000] float-left m-0 top-[65vh] sm:top-[70px] right-[155px] sm:right-[150px] w-[30vw] sm:w-[12vw] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-slate-600"
              : "absolute z-[1000] float-left m-0 top-[70px] right-[-150000000px] w-[12vw] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-slate-600"
          }
          aria-labelledby="dropdownMenuButton2"
          data-te-dropdown-menu-ref
        >
          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal  hover:bg-neutral-100 dark:hover:bg-slate-500"
              href="#"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal  hover:bg-neutral-100  dark:hover:bg-slate-500"
              href="#"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal  hover:bg-neutral-100  dark:hover:bg-slate-500"
              href="#"
              onClick={() => signOut()}
            >
              Sign Out
            </Link>
          </li>
        </ul>
        <div className="hidden sm:block">
          <ul className="flex gap-[30px]">
            {session.status === "authenticated" ? (
              NavbarData.map(({ href, tags }: NavbarItems) => (
                <NavItem
                  key={href}
                  href={href}
                  tags={tags}
                  
                />
              ))
            ) : (
              <li
                onClick={() => signIn("google")}
                className="bg-rose-500 cursor-pointer hover:bg-rose-800 rounded-xl px-4 py-2 text-white"
              >
                Sign in / Sign up
              </li>
            )}
            {session.status === "authenticated" && (
              <div
                onClick={handleProfClick}
                className="flex gap-2 font-bold text-rose-500 items-center justify-center  cursor-pointer"
              >
                <Image
                  src={session.data.user?.image || require("@/public/logo.png")}
                  alt="Logo"
                  height={22}
                  width={25}
                  className="rounded-[100%] shadow-xl"
                />
                <h3>{session.data.user?.name}</h3>
              </div>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
