import { FaCartShopping } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";

function Navbar() {
  return (
    <>
      <div className="bg-[#343A40] w-full h-20 flex flex-row items-center justify-between px-20">
        <h1 className="text-white text-2xl font-bold">Shopzy</h1>
        <ul className="text-white flex flex-row gap-6">
          <li className="flex flex-row items-center gap-3 text-lg cursor-pointer">
            <FaCartShopping /> Cart
          </li>
          <li className="flex flex-row items-center gap-3 text-lg cursor-pointer">
            <FaUserLarge /> Sign In
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
