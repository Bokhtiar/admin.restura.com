import { ICategoryCreateUpdate } from '../../types/category.type'
import { Header } from '../../Layouts/Header'
import { CategoryForm } from '../../Components/Form/category.form'
import { useForm, SubmitHandler } from "react-hook-form";

export const CategoryCreate: React.FC = (): JSX.Element => {
    return <>
        {/* header */}
        <Header title='Category create' another_page_title='list' another_page_link='/category' ></Header>

        {/* category from */}
        <div className='container'>
            <CategoryForm></CategoryForm>
        </div>
    </>
}