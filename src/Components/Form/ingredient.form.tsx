import { PrimaryButton } from "../Button";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Toastify } from "../../Components/toastify";
import { IIngredientCreateUpdate } from "../../types/ingredient.type";
import { ingredientCreate } from "../../Network/Ingredient.network";

export const IngredientCreateForm: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  /* hook-form register */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IIngredientCreateUpdate>();

  /* form submit handler */
  const formSubmitHandler: SubmitHandler<IIngredientCreateUpdate> = async (
    data: IIngredientCreateUpdate
  ) => {
    try {
      const response = await ingredientCreate(data);
      if (response && response.status === 201) {
        navigate("/dashboard/ingredient");
        Toastify.Success(response.data.message);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit(formSubmitHandler)}>
        {/* ingredient name */}
        <div className="my-2">
          <label htmlFor="" className="text-gray-500">
            Ingredient name
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="py-3 px-3 border border-gray-300 w-full rounded-lg focus:outline-none"
            placeholder="ingredient name"
          />

          {errors.name && errors.name.type === "required" && (
            <span className="text-red-600">This is required</span>
          )}
        </div>

        {/* ingredient icon */}
        <div className="my-2">
          <label htmlFor="" className="text-gray-500">
            ingredient icon
          </label>
          <input
            type="text"
            {...register("icon", { required: true })}
            className="py-3 px-3 border border-gray-300 focus:border-gray-500 w-full rounded-lg"
            placeholder="ingredient icon"
          />
          {errors.icon && errors.icon.type === "required" && (
            <span className="text-red-600">This is required</span>
          )}
        </div>

        {/* button */}
        <div className="text-center">
          <PrimaryButton name="Create ingredient"></PrimaryButton>
        </div>
      </form>
    </>
  );
};
