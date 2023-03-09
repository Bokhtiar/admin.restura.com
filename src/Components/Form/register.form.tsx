import { PrimaryButton } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegister } from "../../types/auth.type";
import { registrasion } from "../../Network/Auth.network";
import { useNavigate } from "react-router-dom";

export const RegisterForm: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>();

  const formSubmitHandler: SubmitHandler<IRegister> = async (
    data: IRegister
  ) => {
    console.log(data);
    try {
      const response = await registrasion(data);
      if (response && response.status === 201) {
        navigate("/login");
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <section className="flex h-screen bg-gray-50">
      <div className=" my-auto w-96 shadow-lg bg-white mx-auto px-4 rounded-lg py-6">
        <img
          src="./b.jpg"
          className="h-16 w-16 rounded-full border border-gray-900 p-1 mx-auto"
          alt=""
        />
        {/* logo */}

        <form className="" onSubmit={handleSubmit(formSubmitHandler)}>
          {/* Full name */}
          <div className=" my-3">
            <label htmlFor="" className="text-gray-500">
              Full name
            </label>
            <input
              {...register("name", { required: "This field is required" })}
              type="name"
              className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
              id=""
              placeholder="full name"
            />
          </div>

          {/* email */}
          <div className=" my-3">
            <label htmlFor="" className="text-gray-500">
              Email
            </label>
            <input
              {...register("email", { required: "This field is required" })}
              type="email"
              className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
              id=""
              placeholder="email address"
            />
          </div>

          {/* phone */}
          <div className="my-3">
            <label htmlFor="" className="text-gray-500">
              Phone
            </label>
            <input
              {...register("phone", { required: "This field is required" })}
              type="phone"
              className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
              id=""
              placeholder="Phone"
            />
          </div>

          {/* location */}
          <div className="my-3">
            <label htmlFor="" className="text-gray-500">
              Location
            </label>
            <input
              {...register("location", { required: "This field is required" })}
              type="location"
              className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
              id=""
              placeholder="Location"
            />
          </div>

          {/* password */}
          <div className=" my-3">
            <label className="text-gray-500" htmlFor="">
              Password
            </label>
            <input
              {...register("password", { required: "This field is required" })}
              type="password"
              className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
            />
          </div>

          {/* role */}
          <div className="my-3">
            <input
              {...register("role")}
              type="hidden"
              className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
              defaultValue="admin"
            />
          </div>

          {/* button */}
          <div className="text-center">
            <PrimaryButton name="Register"></PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};
