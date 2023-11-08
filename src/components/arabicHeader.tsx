import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../img/SCANL-LOGO-transparent.png";
export function ArabicHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md flex flex-col m-2 rounded-lg">
      <div className="py-2 md:px-24 px-4 flex flex-row-reverse justify-between">
        <Link to="/arabicHomePage">
          {" "}
          <img
            src={logo}
            className="sm:w-14 w-10"
            alt="Sudanese Coomunity Association of Newfoundland and Labrador logo"
          ></img>
        </Link>

        <div className="hidden md:block">
          <ul className="flex flex-row items-center font-medium mt-4 rounded-lg">
            <li>
              <Link
                to="/arabicHomePage"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
                aria-current="page"
              >
                الرئيسية
              </Link>
            </li>

            <li>
              <Link
                to="/arabicAbout"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              >
                عن الجمعية
              </Link>
            </li>
            <li>
              <Link
                to="/arabicContact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              >
                تواصل معنا
              </Link>
            </li>
            <li>
              <Link
                to="/homePage"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              >
                English{" "}
              </Link>
            </li>
          </ul>
        </div>
        <button
          className="p-2 text-stone-500 font-bold rounded-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          القائمة
        </button>
      </div>
      <div
        className={`${open ? "block" : "hidden"} w-full`}
        id="navbar-hamburger"
      >
        <ul className="flex flex-col items-center font-medium mt-4 rounded-lg">
          <li>
            <Link
              to="/arabicHomePage"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              aria-current="page"
              onClick={() => setOpen(!open)}
            >
              الرئيسية
            </Link>
          </li>

          <li>
            <Link
              to="/arabicAbout"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              onClick={() => setOpen(!open)}
            >
              عن الجمعية
            </Link>
          </li>
          <li>
            <Link
              to="/arabicContact"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
              onClick={() => setOpen(!open)}
            >
              تواصل معنا
            </Link>
          </li>
          <li>
            <Link
              to="/homePage"
              className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-green"
            >
              English{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default ArabicHeader;
