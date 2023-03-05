import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar: React.FC = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(true);
  const [submenuOpen, setsubmenuOpen] = useState<boolean>(false);
  return (
    <>
      {/* dashboard menu */}
      <div className="flex">
        {/* sidebar */}
        <div
          className={` duration-500 bg-gray-600 h-screen ${
            open ? "w-72" : "w-14"
          }  relative`}
        >
          <span
            className={` ${
              !open && "rotate-180"
            }  bg-white text-3xl w-9 rounded-full absolute -right-3 top-12 border cursor-pointer border-red-200 material-symbols-outlined `}
            onClick={() => setOpen(!open)}
          >
            arrow_back
          </span>

          {/* header */}
          <div className="inline-flex items-center text-white gap-3 container py-4">
            <img
              src="./b.jpg"
              className={` ${
                !open ? "h-6 w-6" : "h-10 w-10"
              } duration-700 rounded-full `}
              alt=""
            />
            <span className={` ${!open && "scale-0"} duration-300 `}>
              Restura
            </span>
          </div>

          {/* menu */}
          <ul className="pt-2 container text-white py-4">
            {/* dashboard */}
            <li className="flex items-center gap-2 my-3">
              <span className="material-symbols-outlined">home</span>
              <a href="" className={` ${!open && "hidden"} duration-500 `}>
                Dashboard
              </a>
            </li>

            {/* category */}
            <li className="flex items-center gap-2 my-3">
              <span className="material-symbols-outlined">category</span>
              <Link to="" className={` ${!open && "hidden"} duration-500 `}>
                Category
              </Link>
            </li>

            {/* form */}
            <li className="my-3">
              <div className="flex justify-between gap-2">
                <div className="flex gap-2 items-center">
                  <span className="material-symbols-outlined">article</span>
                  <span className={` ${!open && "scale-0"} `}>Form</span>
                </div>
                <span className="" onClick={() => setsubmenuOpen(!submenuOpen)}>
                  <span
                    className={`material-symbols-outlined cursor-pointer ${
                      submenuOpen && " rotate-90"
                    } `}
                  >
                    keyboard_arrow_down
                  </span>
                </span>
              </div>

              <ul
                className={` duration-700 ${!submenuOpen && "hidden"} ${
                  !open && "scale-0"
                } `}
              >
                <li className="my-1 px-8">
                  <a href="">normle form</a>
                </li>
                <li className="my-1 px-8">
                  <a href="">text form</a>
                </li>
                <li className="my-1 px-8">
                  <a href="">advence form</a>
                </li>
              </ul>
            </li>

            {/* category */}
            <li className="flex items-center gap-2 my-3">
              <span className="material-symbols-outlined">logout</span>
              <Link to="" className={` ${!open && "hidden"} duration-500 `}>
                Logout
              </Link>
            </li>

          </ul>

        </div>
      </div>
    </>
  );
};
