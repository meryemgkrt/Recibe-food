import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaInfo } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-3 h-[70px] text-xl bg-red-400 ">
      <div className="flex items-center gap-3 text-blue-500 ">
        <NavLink
          className="flex items-center gap-3 font-bold text-black"
          to="/home"
          style={({ isActive }) => ({
            color: isActive ? "black" : "",
          })}
        >
          RECİPE
        </NavLink>
      </div>
      <div className="flex gap-8 text-gray-800">
        <NavLink
          className="transition ease-in-out delay-100 hover:text-black hover:font-bold test-black hover:scale-125"
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
        >
          <FaInfo />
        </NavLink>
        <a
          href="https://github.com/meryemgkrt"
          className="transition ease-in-out delay-100 hover:text-black hover:font-bold test-black hover:scale-125"
          target="_blank"
        >
          <FaGithub />
        </a>
        <NavLink
          className="transition ease-in-out delay-100 hover:text-black hover:font-bold test-black hover:scale-150"
          style={({ isActive }) => ({
            color: isActive ? "red" : "",
          })}
          to="/"
        >
          <IoLogOut />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
