import React from "react";

export const Sidebar: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="shadow-2xl h-screen">
        {/* compnay logo */}
        <div className="flex gap-2 items-center py-4 container">
          <img
            className=" rounded-full"
            src="./img/b.jpg"
            style={{ height: "30px", width: "30px" }}
          />
          <span className="uppercase text-xl text-gray-600">Restura</span>
        </div>

        {/* dashboard menu */}
        <section className="container">
          {/* dashboard */}
          <div className="flex gap-2 items-center text-gray-600">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </div>

          {/* form */}
          <div className="flex justify-between items-center text-gray-600 my-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">description</span>
              <span>Form</span>
            </div>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </div>

          {/* table */}
          <div className="flex justify-between items-center text-gray-600 my-4">
            <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">table_rows</span>
              <span>Table</span>
            </div>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </div>

          {/* utils */}
          <div className="flex justify-between items-center text-gray-600 my-4">
            <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">toc</span>
              <span>Utils</span>
            </div>
            <span className="material-symbols-outlined">keyboard_arrow_down</span>
          </div>

          {/* dashboard */}
          <div className="flex gap-2 items-center text-gray-600">
            <span className="material-symbols-outlined">logout</span>
            <span>Logout</span>
          </div>

        </section>
      </div>
    </>
  );
};
