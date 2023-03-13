import { Header } from "../../Layouts/Header";
import { VariantForm } from "../../Components/Form/variant.form";
import { useParams } from "react-router-dom";

export const VariantCreate = (): JSX.Element => {
  const {id} = useParams();

  return (
    <>
      {/* header */}
      <Header
        title="Product variant form"
        another_page_title="list"
        another_page_link="/product/variant"
      ></Header>

      {/* product variant form */}
      <section className="p-6">
        <div className="p-6 shadow-2xl rounded-md">
          <span className="text-2xl text-gray-600">Product form</span>
          <VariantForm _id={`${id}`}></VariantForm>
        </div>
      </section>
    </>
  );
};
