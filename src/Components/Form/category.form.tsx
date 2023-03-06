import { useForm, SubmitHandler } from "react-hook-form";
import { ICategoryCreateUpdate } from '../../types/category.type'

export const CategoryForm: React.FC = (): JSX.Element => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICategoryCreateUpdate>();


    const formSubmitHandler: SubmitHandler<ICategoryCreateUpdate> = (data: ICategoryCreateUpdate) => {
        console.log("data", data);
    };

    return <>
        <form action="" onSubmit={handleSubmit(formSubmitHandler)}>

            {/* category name */}
            <input 
                type="text" 
                {...register("name",{ required: true })}
                className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full"
                placeholder="Category name"
            />

            {/* category icon */}
            <input 
                type="text" 
                {...register("icon",{ required: true })}
                className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full"
                placeholder="Category icon"
            />

        </form>
    </>
}