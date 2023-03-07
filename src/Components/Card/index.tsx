type cartTypes = {
  name: string;
  value: number;
  icon: string;
};
export const Cart: React.FC<cartTypes> = (props: cartTypes): JSX.Element => {
  return (
    <>
      <div className="shadow-md py-6">
        <div className="flex gap-4 items-center container text-gray-600 w-full">
          <div className=" bg-red-500 px-2 rounded-md">
            <span className=" text-white mt-2 material-symbols-outlined">
              {props.icon}
            </span>
          </div>
          <div className="leading-[3px] -mt-3">
            <p className="font-bold text-lg my-1">$ {props.value}</p>
            <p className="">{props.name}</p>
          </div>
        </div>
      </div>

    </>
  );
};
