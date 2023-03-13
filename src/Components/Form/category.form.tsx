import { PrimaryButton } from "../Button";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICategoryCreateUpdate } from "../../types/category.type";
import { categoryCreate, categoryShow, categoryUpdate } from "../../Network/Category.network";
import { useCallback, useEffect, useState } from "react";
import { Toastify } from "../../Components/toastify";

type categoryType = {
  _id : string;
}

export const CategoryForm: React.FC<categoryType> = (props:categoryType): JSX.Element => {  
  const navigate = useNavigate();
  const [edit, setEdit] = useState<ICategoryCreateUpdate>()

  /* hook-form register */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategoryCreateUpdate>();

  /* form submit handler */
  const formSubmitHandler: SubmitHandler<ICategoryCreateUpdate> = async(
    data: ICategoryCreateUpdate
  ) => {
    try {

      const response:any = edit ?  await categoryUpdate(data, props._id) :await categoryCreate(data);
      if(response && response.status ===201){
        navigate("/dashboard/category");
        Toastify.Success(response.data.message);
      }
    } catch (error:any) {
      console.log(error);
    }
  };

  /* specific resoruce show  */
  const fetchData = useCallback(async()=> {
    const response = await categoryShow(props._id);
    if(response && response.status === 200){
      setEdit(response.data.data)
    }
  },[edit])

  /* useCallback */
  useEffect(()=> {
    fetchData()  
  },[])

  
  return (
    <>
      <form action="" onSubmit={handleSubmit(formSubmitHandler)}>
        {/* category name */}
        <div className="my-2">
          <label htmlFor="" className="text-gray-500">Category name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="py-3 px-3 border border-gray-300 w-full rounded-lg focus:outline-none"
            placeholder="Category name"
            defaultValue={edit?.name}
          />
          
          {errors.name && errors.name.type === "required" && (
            <span className="text-red-600">This is required</span>
          )}
        </div>

        {/* category icon */}
        <div className="my-2">
          <label htmlFor="" className="text-gray-500">Category icon</label>
          <input
            type="text"
            {...register("icon", { required: true })}
            className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
            placeholder="Category icon"
            defaultValue={edit?.icon}
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
