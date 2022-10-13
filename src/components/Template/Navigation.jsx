import Home from "../Home";
import Doc from "../Doc";
import StartQuiz from "../StartQuiz";

import { Route, Routes, Link, Navigate } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="bg-sky-900">
        <div className="container mx-auto items-center">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown md:hiden lg:hidden">
                <label tabindex="0" class="btn btn-ghost  text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabindex="0"
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
                >
                  <li>
                    <Link
                      to="/"
                      className="hover:bg-white hover:text-black text-white no-underline"
                    >
                      Empieza un Quiz!
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/documentation"
                      className="hover:bg-white hover:text-black text-white no-underline"
                    >
                      Documentación
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                to="/"
                className="normal-case text-2xl cursor-pointer text-white no-underline"
              >
                preguntAPI
              </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
              <ul className="menu menu-horizontal p-0 m-0">
                <li>
                  <Link
                    to="/"
                    className="hover:bg-white hover:text-black text-white no-underline"
                  >
                    Empieza un Quiz!
                  </Link>
                </li>
                <li>
                  <Link
                    to="/documentation"
                    className="hover:bg-white hover:text-black text-white no-underline"
                  >
                    Documentación
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com/gerardmorte/preguntapi"
                    target="__blank"
                    className="hover:bg-white hover:fill-black border-0 gap-2 fill-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation" element={<Doc />} />
        <Route path="/startQuiz" element={<StartQuiz />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default Navigation;
