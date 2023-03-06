import { useForm } from "react-hook-form";

export const TextInput: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();


  return (
    <>
      <div>
        <input
          type="text"
          className="py-3 px-3 border border-gray-400"
          placeholder="name"
          {...register("name", {required:true})}
        />
         {errors.email && errors.email.type === "required" && (
              <span>This is required</span>
            )}
      </div>
    </>
  );
};
