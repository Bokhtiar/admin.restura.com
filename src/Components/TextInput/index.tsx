import { useForm } from "react-hook-form";

export const TextInput: React.FC = (): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div>
        <input
         {...register("name", {required:true})}
          type="text"
          className="py-3 px-3 border border-gray-400"
          placeholder="name"
        />
      </div>
    </>
  );
};
