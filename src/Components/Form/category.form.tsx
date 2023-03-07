import { useForm, SubmitHandler } from "react-hook-form";
import { ICategoryCreateUpdate } from "../../types/category.type";
import { PrimaryButton } from "../Button";

export const CategoryForm: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategoryCreateUpdate>();

  const formSubmitHandler: SubmitHandler<ICategoryCreateUpdate> = (
    data: ICategoryCreateUpdate
  ) => {
    console.log("data", data);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(formSubmitHandler)}>
        
        {/* category name */}
        <div className="my-2">
          <label htmlFor="">Category name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="py-3 px-3 border border-gray-300 w-full rounded-lg focus:outline-none"
            placeholder="Category name"
          />
          {errors.name && errors.name.type === "required" && (
            <span className="text-red-600">This is required</span>
          )}
        </div>

        {/* category icon */}
        <div className="my-2">
          <label htmlFor="">Category icon</label>
          <input
            type="text"
            {...register("icon", { required: true })}
            className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
            placeholder="Category icon"
          />
          {errors.icon && errors.icon.type === "required" && (
            <span className="text-red-600">This is required</span>
          )}
        </div>

        {/* button */}
        <div className="text-center">
          <PrimaryButton name="Create category"></PrimaryButton>
        </div>
      </form>
    </>
  );
};
