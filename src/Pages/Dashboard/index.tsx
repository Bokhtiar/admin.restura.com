import { useState } from "react";
import DataTable from "react-data-table-component";
import { BradCrumbs } from "../../Components/BradCrumbs";
import { Cart } from "../../Components/Card";
import data from "./data";

export const Dashboard: React.FC = (): JSX.Element => {
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

  const [records, setRecord] = useState(data)

  function handleFilter(event:any) {
    const newData = data.filter(row =>{
      return row.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setRecord(newData)
  }

  return (
    <>
      <BradCrumbs></BradCrumbs>

      {/* card */}
      <section className="grid w-full grid-cols-1 md:grid-cols-4 gap-4">
        <Cart name="Cart" value={20} icon="shopping_cart"></Cart>
        <Cart name="Cart" value={20} icon="shopping_cart"></Cart>
        <Cart name="Cart" value={20} icon="shopping_cart"></Cart>
        <Cart name="Cart" value={20} icon="shopping_cart"></Cart>
      </section>

      {/* table */}
      <div className="flex justify-between items-center my-2">
          <span className="text-2xl text-gray-600">Order Table</span>
          <input type="text" className="border border-gray-400 py-1 rounded-md px-3" placeholder="search" onChange={handleFilter} id="" />
      </div>
      <DataTable
        data={records}
        columns={columns}
        pagination
        fixedHeader
      ></DataTable>
    </>
  );
};
