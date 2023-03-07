import { IPrimaryButton } from "../../types/button.type";

export const PrimaryButton: React.FC<IPrimaryButton> = (
  props: IPrimaryButton
): JSX.Element => {
  return (
    <>
      <button type="submit" className="px-2 w-48 py-2  bg-orange-600 text-white rounded-lg my-4">
        {props.name}
      </button>
    </>
  );
};
