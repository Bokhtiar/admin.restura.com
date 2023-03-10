import { ProductForm } from "../../Components/Form/product.form"
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../Layouts/Header"

export const ProductCreate = ():JSX.Element => {
  const {id} = useParams()
    return <>
        {/* header */}
        <Header title="Product create" another_page_title="list" another_page_link="/dashboard/product"></Header>

        {/* product create */}
        <section className="p-6">
        <div className="p-6 shadow-2xl rounded-md">
            <span className="text-2xl text-gray-600">Product form</span>
           <ProductForm _id={`${id}`}></ProductForm>
        </div>
      </section>
    </>
}