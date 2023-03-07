import data from "../data";
import { useState } from "react";
import { Header } from "../../Layouts/Header";
import DataTable from "react-data-table-component";

export const VariantList = (): JSX.Element => {
  const [records, setRecord] = useState(data);

  /* columns */
  const columns: any = [
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
  ];
  /* search filter */
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
        title="Product variant list"
        another_page_title="add"
        another_page_link="/product/variant/create"
      ></Header>

      {/* product list */}
      <section className="p-6">
        <div className="p-6 shadow-2xl rounded-md">
          <section className="mt-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-600">Product All</span>
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