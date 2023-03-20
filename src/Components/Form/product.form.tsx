import { PrimaryButton } from "../Button";
import {
  SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { networkErrorHandeller } from "../../utils/helper";
import {
  productShow,
  productStore,
  productUpdate,
} from "../../Network/Product.network";
import { IProductCreateUpdate } from "../../types/product.type";
import { Toastify } from "../toastify";
import { useCallback, useEffect, useState } from "react";

import Select from "react-select";
import { IIngredient } from "../../types/ingredient.type";
import { ingredients } from "../../Network/Ingredient.network";
import { categoires } from "../../Network/Category.network";
import { ICategory } from "../../types/category.type";

type productEdit = {
  _id: string;
};

interface IOption {
  label: string;
  value: string;
}

interface IOptionCategory {
  label: string;
  value: string;
}

export const ProductForm: React.FC<productEdit> = (
  props: productEdit
): JSX.Element => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState<IProductCreateUpdate>();
  const [data, setData] = useState<IIngredient[] | []>();
  const [categories, setCategories] = useState<ICategory[] | []>();
  const [selectOptions, setSelectOptions] = useState<any[]>([]);
  const [selectOptionsCategory, setSelectOptionsCategory] = useState<any[]>([]);

  /* hook-form register */
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<IProductCreateUpdate>();

  /* form submit handler */
  const formSubmitHandler: SubmitHandler<IProductCreateUpdate> = async (
    data: IProductCreateUpdate
  ) => {
    try {
      console.log(data);
      
      const response: any = edit
        ? await productUpdate(data, props._id)
        : await productStore(data);
      if (response && response.status === 201) {
        console.log(response.data.data);

        navigate("/dashboard/product");
        Toastify.Success(response.data.message);
      }
    } catch (error: any) {
      networkErrorHandeller(error);
    }
  };

  // /* specific reosurce show */
  // const productEdit = useCallback(async () => {
  //   try {
  //     const response = await productShow(props._id);
  //     if (response && response.status === 200) {
  //       setEdit(response.data.data);
  //       console.log(response.data.data);
  //     }
  //   } catch (error: any) {
  //     networkErrorHandeller(error);
  //   }
  // }, [props._id]);

  /* ingredient list */
  const fetchDataIngredient = useCallback(async () => {
    try {
      const response = await ingredients();
      setData(response.data);
      const optionArr: IOption[] = [];
      const dataArr = response.data.data;
      const arrLength = response.data.data.length;
      if (arrLength) {
        for (let i = 0; i < arrLength; i++) {
          const element = dataArr[i];
          optionArr.push({
            label: element.name,
            value: element._id,
          });
        }
      }

      setSelectOptions(optionArr);
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  /* categories */
  const fetchDataCategory = useCallback(async () => {
    try {
      const response = await categoires();
      setCategories(response.data.data);
      const optionArr: IOption[] = [];
      const dataArr = response.data.data;
      const arrLength = response.data.data.length;

      if (arrLength) {
        for (let i = 0; i < arrLength; i++) {
          const element = dataArr[i];
          console.log("category", element);
          optionArr.push({
            label: element.name,
            value: element._id,
          });
        }
      }
      setSelectOptionsCategory(optionArr);
    } catch (error: any) {
      console.log(error);
    }
  }, []);

  /* useEffect */
  useEffect(() => {
    // productEdit();
    fetchDataIngredient();
    fetchDataCategory();
  }, [fetchDataIngredient, fetchDataCategory]);

  return (
    <>
      <form action="" onSubmit={handleSubmit(formSubmitHandler)}>
        <div className="grid grid-cols-2 gap-4">
          <Controller
            control={control}
            name="ingredient"
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Select
                options={selectOptions || []}
                onChange={onChange}
                isMulti={true}
                onBlur={onBlur}
                value={value}
                name={name}
                ref={ref}
              />
            )}
          />

          <Controller
            control={control}
            name="category"
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
              <Select
                options={selectOptionsCategory || []}
                onChange={onChange}
                isMulti={false}
                onBlur={onBlur}
                value={value}
                name={name}
                ref={ref}
              />
            )}
          />

          {/* name */}
          <div className=" col-span-1">
            <input
              type="text"
              {...register("name", { required: true })}
              className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
              placeholder="product name"
              defaultValue={edit?.name}
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
              defaultValue={edit?.price}
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
              defaultValue={edit?.image}
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
              defaultValue={edit?.cooking_time}
              className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
              placeholder="cooking time"
            />
            {errors.cooking_time && errors.cooking_time.type === "required" && (
              <span className="text-red-600">This is required</span>
            )}
          </div>

          {/* components */}

          {/* description */}
          <div className="col-span-2">
            <textarea
              {...register("description", { required: true })}
              defaultValue={edit?.description}
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
