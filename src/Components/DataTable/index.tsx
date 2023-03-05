import { useState } from "react";
import DataTable from "react-data-table-component";

type dataTableType = {
  heading: string;
  fild: string;
  items: [];
  columns: [];
};

export const DataTableComponents: React.FC<dataTableType> = (
  props: dataTableType
): JSX.Element => {
  const [records, setRecord] = useState(props.items);
    
  function handleFilter(event: any) {

    const newData: any = props.items.filter((row: any) => {
      return row.title
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });

    setRecord(newData);
  }

  return (
    <>
      <div className="flex justify-between items-center mt-2">
        <span className="text-2xl text-gray-600">{props.heading}</span>
        <input
          type="text"
          className="border border-gray-400 py-1 rounded-md px-3"
          placeholder="search"
          onChange={handleFilter}
        />
      </div>
      <DataTable
        data={records}
        columns={props.columns}
        pagination
        fixedHeader
      ></DataTable>
    </>
  );
};
