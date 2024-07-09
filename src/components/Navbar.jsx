import { useEffect, useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <div className="bg-[#343A40] w-full h-20 flex flex-row items-center justify-between px-20">
        <Link to="/">
          <h1 className="text-white text-2xl font-bold cursor-pointer">
            Shopzy
          </h1>
        </Link>
        <ul className="text-white flex flex-row gap-6">
          <Link to="/cart">
            <li className="flex flex-row items-center gap-3 text-lg cursor-pointer">
              <FaCartShopping /> Cart
            </li>
          </Link>
          {isLoggedIn ? (
            <li
              className="flex flex-row items-center gap-2 text-lg cursor-pointer"
              onClick={handleLogout}
            >
              <IoLogOutOutline className="text-[1.4rem]" /> Logout
            </li>
          ) : (
            <Link to="/login">
              <li className="flex flex-row items-center gap-3 text-lg cursor-pointer">
                <FaUserLarge /> Sign In
              </li>
            </Link>
          )}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
