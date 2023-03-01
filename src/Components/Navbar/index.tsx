export const Navbar: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="flex justify-between items-center py-4 shadow-lg container">
        {/* search */}
        <div className="flex items-center">
          <input
            type="text"
            className="py-1 pl-9 absolute border border-gray-200 rounded-md "
            placeholder="search"
            name=""
            id=""
          />
          <span className="relative pl-2 material-symbols-outlined">
            Search
          </span>
        </div>

        {/* profile */}
        <div className="flex items-center gap-2">
          <span className=" text-gray-500 material-symbols-outlined">
            notifications
          </span>
          <span className="text-gray-500 material-symbols-outlined">mail</span>
          <img
            className=" rounded-full"
            src="./img/b.jpg"
            style={{ height: "30px", width: "30px" }}
          />
        </div>
      </div>
    </>
  );
};
