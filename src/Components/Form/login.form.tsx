import { PrimaryButton } from "../Button";

export const LoginForm: React.FC = (): JSX.Element => {
  return (
    <>
      <section className="flex h-screen bg-gray-50">
        <div className=" my-auto w-96 shadow-lg bg-white mx-auto px-4 rounded-lg py-6">
          <img
            src="./b.jpg"
            className="h-16 w-16 rounded-full border border-gray-900 p-1 mx-auto"
            alt=""
          />
          {/* end logo */}

          <form className="">
            {/* email */}
            <div className=" my-3">
              <label htmlFor="" className="text-gray-500">
                Email
              </label>
              <input
                type="email"
                className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
                name=""
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
                type="password"
                className="border border-gray-300 py-2 w-full focus:outline-none rounded-lg px-4"
                name=""
              />
            </div>

            {/* button */}
            <div className="text-center">
              <PrimaryButton name="Login"></PrimaryButton>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
