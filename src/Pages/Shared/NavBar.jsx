import React, { useContext, useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Tooltip,
  Avatar,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Authentication/AuthProvider";


export function NavigateBar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const { user, logOut } = useContext(AuthContext);
  // console.log("sei",user);
  const handleLogout = () => {
    logOut()
      .then(() => console.log("User Logged Out Succesfully"))

      .catch((error) => console.error(error));
  };
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 ">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold lg:text-lg text-base font-['Montserrat']"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2  border-b-4 border-b-[#E74C3C] text-[#E74C3C] "
              : ""
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-['Montserrat'] lg:text-lg text-base"
      >
        <NavLink
          to="/allartcraft"
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2  border-b-4 border-b-[#E74C3C] text-[#E74C3C]"
              : ""
          }
        >
          All Art & craft
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-['Montserrat'] lg:text-lg text-base"
      >
        <NavLink
          to="/addcraft"
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2  border-b-4 border-b-[#E74C3C] text-[#E74C3C]"
              : ""
          }
        >
          Add Craft
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold font-['Montserrat'] lg:text-lg text-base"
      >
        <NavLink
          to="/myartcraft"
          className={({ isActive }) =>
            isActive
              ? "px-3 py-2  border-b-4 border-b-[#E74C3C] text-[#E74C3C]"
              : ""
          }
        >
          My Art & Craft
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"
      >
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller"
            
              onChange={handleToggle}
              // show toggle image based on localstorage theme
              checked={theme === "light" ? false : true}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </Typography>
    </ul>
  );

  return (
    <div className=" mx-auto ">
      <Navbar className="shadow-none h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <NavLink to="/">
            <Typography
              as="a"
              className="mr-4 cursor-pointer py-1.5 font-bold lg:text-3xl text-xl  font-['Montserrat']"
            >
              Woven Earth
            </Typography>
          </NavLink>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              {!user ? (
                <div className="flex gap-2">
                  <NavLink to="/login">
                    <Button
                      variant="filled"
                      size="lg"
                      className="hidden lg:inline-block font-['Montserrat'] "
                    >
                      <span>Sign In</span>
                    </Button>
                  </NavLink>
                  <NavLink to="/register">
                    <Button
                      variant="gradient"
                      size="lg"
                      className="hidden lg:inline-block font-['Montserrat'] "
                    >
                      <span>Sign Up</span>
                    </Button>
                  </NavLink>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Tooltip content={user ? user.displayName : "User"}>
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src={
                        user
                          ? user.photoURL
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Rh9wpNlQX2jULT6jjO-Q7bEjhZCp0lmsMI2IzT7imA&s"
                      }
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                  <Button
                    className="hidden lg:inline-block"
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </div>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            {!user ? (
              <div className="flex gap-2">
                <NavLink to="/login">
                  <Button
                    variant="filled"
                    size="sm"
                    className="font-['Montserrat'] "
                  >
                    <span>Sign In</span>
                  </Button>
                </NavLink>
                <NavLink to="/register">
                  <Button
                    variant="gradient"
                    size="sm"
                    className="font-['Montserrat'] "
                  >
                    <span>Sign Up</span>
                  </Button>
                </NavLink>
              </div>
            ) : (
              <div className="flex gap-2">
                <Tooltip content={user ? user.displayName : "Sifat"}>
                  <Avatar
                    size="sm"
                    variant="circular"
                    alt="tania andrew"
                    src={
                      user
                        ? user.photoURL
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Rh9wpNlQX2jULT6jjO-Q7bEjhZCp0lmsMI2IzT7imA&s"
                    }
                    className="border-2 border-white hover:z-10"
                  />
                </Tooltip>
                <Button
                  size="sm"
                  className="inline-block lg:hidden"
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </div>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
