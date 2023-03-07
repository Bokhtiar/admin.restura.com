import { useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { Header } from "../../Layouts/Header";
import data from "../data";

export const OrderList = (): JSX.Element => {
  const [records, setRecord] = useState(data);
  const columns: any = [
    {
      name: "Title",
      maxWidth: "60px",
      selector: () => (
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7kYpvPiHtsrq951vlIK-DlGlEQ06XWa-zA&usqp=CAU"
          alt="Employee avatar"
          className="w-[50px] h-[50px] rounded-full mx-auto p-1"
        />
      ),
    },

    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Directior",
      selector: "director",
      sortable: true,
    },
    {
      name: "Runtime (m)",
      selector: "runtime",
      right: true,
    },
    {
        name: "Action",
        maxWidth: "160px",
        cell: () => (
          <div className="flex gap-1">
            <Link to={`/admin/show/1`}>
            <span className=" bg-green-600 text-white p-1 rounded-full material-symbols-outlined">edit</span>
            </Link>
            <Link to={`/admin/edit/1`}>
            <span className="bg-red-600 text-white p-1 rounded-full material-symbols-outlined">delete</span>
            </Link>
          </div>
        ),
      },
  ];

  function handleFilter(event: any) {
    const newData = data.filter((row) => {
      return row.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecord(newData);
  }

  return (
    <>
      {/* header */}
      <Header
        title="Order List"
        another_page_title=""
        another_page_link=""
      ></Header>

      {/* table order */}
      <section className="p-6">
        <div className="p-6 shadow-2xl rounded-md">
          <section className="mt-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-600">Order All</span>
              <input
                type="text"
                className="border border-gray-400 py-1 rounded-md px-3"
                placeholder="search"
                onChange={handleFilter}
                id=""
              />
            </div>
            <DataTable
              data={records}
              columns={columns}
              pagination
              fixedHeader
            ></DataTable>
          </section>
        </div>
      </section>
    </>
  );
};
