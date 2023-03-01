import { Button, Theme } from "react-daisyui";
import { BradCrumbs } from "../../Components/BradCrumbs";

export const Dashboard: React.FC = (): JSX.Element => {
  return (
    <>
      <BradCrumbs></BradCrumbs>

      {/* card */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* shopping cart */}
        <div className=" shadow-md py-6">
          <div className="flex gap-4 items-center container text-gray-600">
            <div className=" bg-red-500 px-2 rounded-md">
              <span className=" text-white mt-2 material-symbols-outlined">
                shopping_cart
              </span>
            </div>
            <div className="leading-[3px] -mt-3">
              <p className="font-bold text-lg">$ 290</p>
              <p className="">cart</p>
            </div>
          </div>
        </div>

        {/* shopping cart */}
        <div className=" shadow-md py-6">
          <div className="flex gap-4 items-center container text-gray-600">
            <div className=" bg-red-500 px-2 rounded-md">
              <span className=" text-white mt-2 material-symbols-outlined">
                shopping_cart
              </span>
            </div>
            <div className="leading-[3px] -mt-3">
              <p className="font-bold text-lg">$ 290</p>
              <p className="">cart</p>
            </div>
          </div>
        </div>

        {/* shopping cart */}
        <div className=" shadow-md py-6">
          <div className="flex gap-4 items-center container text-gray-600">
            <div className=" bg-red-500 px-2 rounded-md">
              <span className=" text-white mt-2 material-symbols-outlined">
                shopping_cart
              </span>
            </div>
            <div className="leading-[3px] -mt-3">
              <p className="font-bold text-lg">$ 290</p>
              <p className="">cart</p>
            </div>
          </div>
        </div>

        {/* shopping cart */}
        <div className=" shadow-md py-6">
          <div className="flex gap-4 items-center container text-gray-600">
            <div className=" bg-red-500 px-2 rounded-md">
              <span className=" text-white mt-2 material-symbols-outlined">
                shopping_cart
              </span>
            </div>
            <div className="leading-[3px] -mt-3">
              <p className="font-bold text-lg">$ 290</p>
              <p className="">cart</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
