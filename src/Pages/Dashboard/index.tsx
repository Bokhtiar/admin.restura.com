import { useState } from "react";
import DataTable from "react-data-table-component";
import { BradCrumbs } from "../../Components/BradCrumbs";
import { Cart } from "../../Components/Card";
import data from "./data";
import { useForm, SubmitHandler } from "react-hook-form";

interface formSUbmit {
  name: string;
}

export const Dashboard: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<formSUbmit>();

  const formSubmitHandler: SubmitHandler<formSUbmit> = (data: formSUbmit) => {
    console.log("data", data);
  };

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

  const [records, setRecord] = useState(data);

  function handleFilter(event: any) {
    const newData = data.filter((row) => {
      return row.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecord(newData);
  }

  return (
    <>
      {/* card */}
      <section className="grid w-full grid-cols-1 md:grid-cols-4 gap-4">
        <Cart name="Cart" value={20} icon="shopping_cart"></Cart>
        <Cart name="Cart" value={20} icon="shopping_cart"></Cart>
        <Cart name="Cart" value={20} icon="shopping_cart"></Cart>
        <Cart name="Cart" value={20} icon="shopping_cart"></Cart>
      </section>

      {/* table */}
      <section className="p-6">
        <div className="p-6 shadow-2xl rounded-md">
          <section className="mt-4">
            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-600">Category All</span>
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
