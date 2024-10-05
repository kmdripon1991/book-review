import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    // <nav className="p-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo */}
        <div
          className="flex items-center font-bold"
        >
          <Link className="flex items-center space-x-2">
            <img
              src="https://img.icons8.com/3d-fluency/94/book.png"
              alt="Logo"
              className="h-10"
            />
            <span className="text-[2.5rem] leading-[2.5rem]">Book Review</span>
          </Link>
        </div>

        {/* Middle: Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-500 border border-green-500 px-4 py-2 rounded " : "text-gray-300 hover:text-green-500"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/listed-books"
            className={({ isActive }) =>
              isActive ? "text-green-500 border border-green-500 px-4 py-2 rounded" : "text-gray-300 hover:text-green-500"
            }
          >
            Listed Books
          </NavLink>
          <NavLink
            to="/pages-read"
            className={({ isActive }) =>
              isActive ? "text-green-500 border border-green-500 px-4 py-2 rounded" : "text-gray-300 hover:text-green-500"
            }
          >
            Pages to Read
          </NavLink>
        </div>

        {/* Right Side: Buttons */}
        <div className="space-x-4">
          <button className="btn-primary">Sign Up</button>
          <button className="btn-secondary">Login</button>
        </div>
      </nav>
    // </nav>
  );
};

export default Navbar;
