import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Toastify } from "../../Components/toastify";
import { Header } from "../../Layouts/Header";
import { productDestroy, productList } from "../../Network/Product.network";
import { IProduct } from "../../types/product.type";

export const ProductList = (): JSX.Element => {
  const [data, setData] = useState<IProduct[] | []>([]);

  /* fetchData */
  const fetchData = useCallback(async () => {
    try {
      const response = await productList();
      if (response && response.status === 200) {
        setData(response.data?.data);
      }
    } catch (error: any) {
      Toastify.Error(error);
    }
  }, [data]);

  /* destory */
  const destroy = async (_id: any) => {
    try {
      const response = await productDestroy(_id);
      if (response && response.status === 200) {
        fetchData()
        Toastify.Success(response.data.message);
      }
    } catch (error: any) {
      Toastify.Error(error);
    }
  };

  /* useEffect */
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* header */}
      <Header
        title="Product List"
        another_page_title="add"
        another_page_link="/dashboard/product/create"
      ></Header>

      {/* product list */}
      <section className="p-6">
        <div className="p-6 shadow-2xl rounded-md">
          <section className="mt-4">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, i) => {
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
                            <img
                              src={item.image}
                              className="h-16 w-24"
                              alt=""
                            />
                          </th>
                          <td className="px-6 py-4">{item.name}</td>
                          <td className="px-6 py-4">{item.price}</td>
                          <td className="px-6 py-4 flex gap-1">
                            <Link to={`/dashboard/product/edit/${item._id}`}>
                              <span className="rounded-full bg-green-600 p-1 text-white material-symbols-outlined">
                                edit
                              </span>
                            </Link>
                            <span
                              onClick={() => destroy(item._id)}
                              className="cursor-pointer rounded-full bg-red-600 p-1 text-white material-symbols-outlined"
                            >
                              delete
                            </span>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};
