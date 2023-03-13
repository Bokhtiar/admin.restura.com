import { PrimaryButton } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { IProductCreateUpdate } from "../../types/product.type";

export const ProductForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductCreateUpdate>();

  const formSubmitHandler: SubmitHandler<IProductCreateUpdate> = (
    data: IProductCreateUpdate
  ) => {
    console.log("data", data);
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(formSubmitHandler)}>
        <div className="grid grid-cols-2 gap-4">

          {/* name */}
          <div className=" col-span-1">
            <input
              type="text"
              {...register("name", { required: true })}
              className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
              placeholder="product name"
            />
            {errors.name && errors.name.type === "required" && (
              <span className="text-red-600">This is required</span>
            )}
          </div>

          {/* price */}
          <div className=" col-span-1">
            <input
              type="number"
              {...register("price", { required: true })}
              className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
              placeholder="product price "
            />
            {errors.price && errors.price.type === "required" && (
              <span className="text-red-600">This is required</span>
            )}
          </div>

          {/* image */}
          <div className=" col-span-1">
            <input
              type="text"
              {...register("image", { required: true })}
              className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
              placeholder="product image "
            />
            {errors.image && errors.image.type === "required" && (
              <span className="text-red-600">This is required</span>
            )}
          </div>

          {/* cooking time */}
          <div className=" col-span-1">
            <input
              type="text"
              {...register("cooking_time", { required: true })}
              className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
              placeholder="cooking time"
            />
            {errors.cooking_time && errors.cooking_time.type === "required" && (
              <span className="text-red-600">This is required</span>
            )}
          </div>

          {/* description */}
          <div className="col-span-2">
            <textarea
              {...register("description", { required: true })}
              className="py-5 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
              placeholder="Description"
            ></textarea>
            {errors.cooking_time && errors.cooking_time.type === "required" && (
              <span className="text-red-600">This is required</span>
            )}
          </div>
        </div>

        {/* primary button */}
        <div className="text-center">
          <PrimaryButton name="Product create"></PrimaryButton>
        </div>
      </form>
    </>
  );
};
