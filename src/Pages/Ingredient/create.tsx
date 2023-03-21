import { IngredientCreateForm } from "../../Components/Form/ingredient.form";
import { Header } from "../../Layouts/Header";

export const IngredientCreate: React.FC = (): JSX.Element => {
  return (
    <>
      <Header
        title="Ingredient List"
        another_page_title="list"
        another_page_link="/dashboard/ingredient"
      ></Header>

      <section className="p-6">
        <div className="p-6 shadow-2xl rounded-md">
          <span className="text-2xl text-gray-600">Ingredient form</span>
          <IngredientCreateForm></IngredientCreateForm>
        </div>
      </section>
    </>
  );
};
