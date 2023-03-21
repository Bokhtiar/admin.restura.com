import { useCallback, useEffect, useState } from "react";
import { Header } from "../../Layouts/Header";
import { IIngredient } from "../../types/ingredient.type";
import { ingredients } from "../../Network/Ingredient.network";
import { Link } from "react-router-dom";

export const Ingredient: React.FC = (): JSX.Element => {
  const [data, setData] = useState<IIngredient[] | []>([]);
 
  //fetchData
  const fetchData = useCallback(async () => {
    try {
      const response = await ingredients();
      if (response && response.status === 200) {
        setData(response.data?.data);
      }
    } catch (error: any) {
      console.log(error);
    }
  }, []);



  /* useEffect */
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Header
        title="Ingredient List"
        another_page_title="add"
        another_page_link="/dashboard/ingredient/create"
      ></Header>

      <div className="">
        <div className="shadow-lg m-3">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Icon
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => {
                  return (
                    <>
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={i}
                      >
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          <img src={d.icon} className="h-16 w-24" alt="" />
                        </th>
                        <td className="px-6 py-4">{d.name}</td>
                        <td className="px-6 py-4 flex gap-1">
                          <Link to={`/dashboard/category/edit/${d._id}`}>
                            <span className="rounded-full bg-green-600 p-1 text-white material-symbols-outlined">
                              edit
                            </span>
                          </Link>
                          {/* <span
                            onClick={() => destroy(d._id)}
                            className="cursor-pointer rounded-full bg-red-600 p-1 text-white material-symbols-outlined"
                          >
                            delete
                          </span> */}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
