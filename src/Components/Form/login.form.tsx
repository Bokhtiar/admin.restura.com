import { PrimaryButton } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { ILogin } from "../../types/auth.type";
import { login } from "../../Network/Auth.network";
import { setToken } from "../../utils/helper";
import { useNavigate } from "react-router-dom";

export const LoginForm: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const formSubmitHandler: SubmitHandler<ILogin> = async (data: ILogin) => {
    console.log(data);
    try {
      const response = await login(data);
      if (response && response.status === 200) {
        await setToken(response.data?.token);
        navigate("/dashboard");
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
        {/* end logo */}

        <form className="" onSubmit={handleSubmit(formSubmitHandler)}>
          {/* email */}
          <div className=" my-3">
            <label htmlFor="" className="text-gray-500">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
              id=""
              placeholder="email address"
            />
          </div>

          {/* password */}
          <div className=" my-3">
            <label className="text-gray-500" htmlFor="">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
            />
          </div>

          {/* button */}
          <div className="text-center">
            <PrimaryButton name="Login"></PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};
