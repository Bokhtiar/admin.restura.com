import { PrimaryButton } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { IVariantCreateUpdate } from "../../types/variant.type";
import { networkErrorHandeller } from "../../utils/helper";
import { useCallback, useEffect, useState } from "react";
import { IProduct } from "../../types/product.type";
import { productList } from "../../Network/Product.network";
import {
  variantShow,
  variantStore,
  variantUpdate,
} from "../../Network/Variant.network";
import { useNavigate } from "react-router-dom";
import { Toastify } from "../toastify";

type variantType = {
  _id: string;
};

export const VariantForm: React.FC<variantType> = (
  props: variantType
): JSX.Element => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState<IVariantCreateUpdate>();
  const [product, setProduct] = useState<IProduct[] | []>([]);

  /* product list */
  const productFetchData = useCallback(async () => {
    try {
      const response = await productList();
      if (response && response.status === 200) {
        setProduct(response.data.data);
      }
    } catch (error: any) {
      console.log(error);
      networkErrorHandeller(error);
    }
  }, []);

  /* product variant specific reosurce */
  const variantEdit = useCallback(async () => {
    try {
      const response = await variantShow(props._id);
      if (response && response.status === 200) {
        setEdit(response.data.data);
      }
    } catch (error: any) {
      networkErrorHandeller(error);
    }
  }, [edit]);

  /* hook-form register */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IVariantCreateUpdate>();

  /* form submit handler */
  const formSubmitHandler: SubmitHandler<IVariantCreateUpdate> = async (
    data: IVariantCreateUpdate
  ) => {
    try {
      const response = edit
        ? await variantUpdate(data, props._id)
        : await variantStore(data);
      if (response && response.status === 201) {
        navigate("/dashboard/product/variant");
        Toastify.Success(response.data.data);
      }
    } catch (error: any) {
      networkErrorHandeller(error);
    }
  };

  /* useEffect */
  useEffect(() => {
    productFetchData();
    variantEdit();
  }, []);

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
              defaultValue={edit?.name}
            />
            {errors.name && errors.name.type === "required" && (
              <span className="text-red-600">This is required</span>
            )}
          </div>

          {/* product */}
          <div className=" col-span-1">
            <select
              defaultValue={edit?.product?._id}
              {...register("product", { required: true })}
              className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
            >
              {product.map((item, i) => {
                return <option value={item._id}>{item.name}</option>;
              })}
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
              defaultValue={edit?.price}
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
              placeholder="image"
              defaultValue={edit?.image}
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
