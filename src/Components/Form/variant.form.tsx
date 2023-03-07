import { PrimaryButton } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { IVariantCreateUpdate } from "../../types/variant.type";

export const VariantForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVariantCreateUpdate>();

  const formSubmitHandler: SubmitHandler<IVariantCreateUpdate> = (
    data: IVariantCreateUpdate
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
              placeholder="product variant name"
            />
            {errors.name && errors.name.type === "required" && (
              <span className="text-red-600">This is required</span>
            )}
          </div>

          {/* product */}
          <div className=" col-span-1">
            <select
              {...register("product", { required: true })}
              className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
            >
              <option value="vasd1">asdfasd1</option>
              <option value="vasd2">asdfasd2</option>
              <option value="vasd3">asdfasd3</option>
              <option value="vasd4">asdfasd4</option>
            </select>

            {errors.product && errors.product.type === "required" && (
              <span className="text-red-600">This is required</span>
            )}
          </div>

          {/* price */}
          <div className=" col-span-1">
            <input
              type="number"
              {...register("price", { required: true })}
              className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
              placeholder="product varaint price "
            />
            {errors.price && errors.price.type === "required" && (
              <span className="text-red-600">This is required</span>
            )}
          </div>

          {/* image */}
          <div className=" col-span-1">
            <input
              type="file"
              {...register("image", { required: true })}
              className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
            />
            {errors.image && errors.image.type === "required" && (
              <span className="text-red-600">This is required</span>
            )}
          </div>
        </div>

        {/* primary button */}
        <div className="text-center">
          <PrimaryButton name="Product variant create"></PrimaryButton>
        </div>
      </form>
    </>
  );
};
