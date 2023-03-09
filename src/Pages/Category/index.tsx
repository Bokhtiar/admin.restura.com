import { useCallback, useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Header } from "../../Layouts/Header/index";
import { ICategory } from "../../types/category.type";
import { categoires } from "../../Network/Category.network";
import { Link } from "react-router-dom";
import { IRDataColumns } from "../../types/datatable.type";

export const CategoryList: React.FC = (): JSX.Element => {
  const [data, setData] = useState<ICategory[] | []>([]);

  /* fetchData */
  const fetchData = useCallback(async () => {
    try {
      const response: any = await categoires();
      if (response && response.status === 200) {
        console.log(response.data.data);
        setData(response.data?.data);
      }
    } catch (error: any) {
      console.log(error);
    }
  }, [data]);

  /* useEffect */
  useEffect(() => {
    fetchData();
  }, []);

  // table colums
  const columns: IRDataColumns[] = [
    {
      name: "",
      maxWidth: "60px",
      cell: (row) => (
        <img
          src={row.icon}
          alt="Company avatar"
          className="w-[50px] h-[50px] rounded-full mx-auto"
        />
      ),
    },
    {
      name: "Name",
      maxWidth: "150px",
      selector: (row) => row.name,
    },
    {
      name: "Action",
      maxWidth: "70px",
      cell: (row) => (
        <div className="flex gap-1">
          <Link to={`/dashboard/applications/${row._id}`}>
            edit
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* header */}
      <Header
        title="Category list"
        another_page_title="add"
        another_page_link="/category/create"
      ></Header>

      {/* category */}
      <DataTable
        data={data}
        columns={columns}
        pagination={true}
        noDataMessage="No jobs available."
      />
    </>
  );
};
