import { useState } from "react";
import DataTable from "react-data-table-component";
import { BradCrumbs } from "../../Components/BradCrumbs";
import { Cart } from "../../Components/Card";
import data from "./data";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextInput } from "../../Components/TextInput";

interface formSUbmit {
  name: string;
}

export const Dashboard: React.FC = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<formSUbmit>();

  const formSubmitHandler: SubmitHandler<formSUbmit> = (data: formSUbmit) => {
    console.log("data", data);
  };

  const columns: any = [
    {
      name: "Title",
      selector: "title",
      sortable: true,
    },
    {
      name: "Directior",
      selector: "director",
      sortable: true,
    },
    {
      name: "Runtime (m)",
      selector: "runtime",
      right: true,
    },
  ];

  const [records, setRecord] = useState(data);

  function handleFilter(event: any) {
    const newData = data.filter((row) => {
      return row.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecord(newData);
  }

  return (
    <>
      <BradCrumbs></BradCrumbs>

      {/* card */}
      <section className="grid w-full grid-cols-1 md:grid-cols-4 gap-4">
        <Cart name="Cart" value={20} icon="shopping_cart"></Cart>
        <Cart name="Cart" value={20} icon="shopping_cart"></Cart>
        <Cart name="Cart" value={20} icon="shopping_cart"></Cart>
        <Cart name="Cart" value={20} icon="shopping_cart"></Cart>
      </section>

      {/* table */}
      <section>
        <div className="flex justify-between items-center mt-2">
          <span className="text-2xl text-gray-600">Order Table</span>
          <input
            type="text"
            className="border border-gray-400 py-1 rounded-md px-3"
            placeholder="search"
            onChange={handleFilter}
            id=""
          />
        </div>
        <DataTable
          data={records}
          columns={columns}
          pagination
          fixedHeader
        ></DataTable>
      </section>

      {/* react-hook-form */}
      <section>
        <form action="" onSubmit={handleSubmit(formSubmitHandler)}>
       
          {/* 
        <input
          type="text"
          {...register("name")}
          className="py-3 px-3 border border-gray-400"
          placeholder="name"
          id="name"
        />  */}
          <br />

          {/*         
        {errors.phone && errors.phone.type === "required" && (
              <span>This is required asdfa </span>
            )} <br /> */}

          {/* <label htmlFor="email">email</label>
          <input
            className="py-3 px-3 border border-gray-400"
            id="email"
            
            
            {...register("email", {
              required:"required",   
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
              minLength: {
                value: 5,
                message: "min length is 5"
              },
            })}

            type="email"
          />
          {errors.email && <span role="alert">{errors.email.message}</span>} */}

          {/* <div>
            <label htmlFor="">Full name</label>
            <input
              type="text"
              defaultValue="bokhtiar toshar"
              {...register("fullname")}
              className="py-3 px-3 border border-gray-400"
              placeholder="full name"
              name="fullname"
              id="fullname"
            />
          </div> */}
          {/* 
          <div>
            <label htmlFor="">Category</label>
            <select {...register("category", {required:"category required"})} id="">
              <option value="vasd1">asdfasd1</option>
              <option value="vasd2">asdfasd2</option>
              <option value="vasd3">asdfasd3</option>
              <option value="vasd4">asdfasd4</option>
            </select>
          </div> */}

          {/* <div>
            <label htmlFor="">Email</label>
            <input
              {...register("email", { required: "req", maxLength: 6 })}
              type="email"
              className="py-3 px-3 border border-gray-400"
              placeholder="full name"
              name="email"
              id="email"
            />

            {errors.email && errors.email.type === "required" && (
              <span>This is required</span>
            )}
            {errors.email && errors.email.type === "maxLength" && (
              <span>Max length exceeded</span>
            )}
            {errors.email && errors.email.type === "minLength" && (
              <span>min length exceeded</span>
            )}
          </div> */}
          {/* 
          <div>
            <label htmlFor="">Phone</label>
            <input
              {...register("phone", { required: true, minLength: 3 })}
              type="number"
              className="py-3 px-3 border border-gray-400"
              placeholder="full name"
              name="phone"
              id="phone"
            />
            {errors.phone && errors.phone.type === "required" && (
              <span>This is required</span>
            )}
            {errors.phone && errors.phone.type === "minLength" && (
              <span>minLength 3</span>
            )}
          </div> */}

          {/* <input type="submit" value="submit" name="" id="" /> */}
        </form>
      </section>
    </>
  );
};
