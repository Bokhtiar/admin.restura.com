import { ICategoryCreateUpdate } from "../../types/category.type";
import { Header } from "../../Layouts/Header";
import { CategoryForm } from "../../Components/Form/category.form";

export const CategoryCreate: React.FC = (): JSX.Element => {
  return (
    <>
      {/* header */}
      <Header
        title="Category create"
        another_page_title="list"
        another_page_link="/dashboard/category"
      ></Header>

      {/* category from */}
      <section className="p-6">
        <div className="p-6 shadow-2xl rounded-md">
            <span className="text-2xl text-gray-600">Category form</span>
          <CategoryForm></CategoryForm>
        </div>
      </section>
    </>
  );
};
 