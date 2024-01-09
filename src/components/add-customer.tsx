import React, { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { set, useForm } from "react-hook-form";
import Input from "./input";
import { addUser } from "@/store/apps/user";
import { useSetUserMutation } from "@/services/user";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

const loginFormSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
  email: yup.string().required("Please enter your email"),
});

const defaultValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
};

const AddCustomer = () => {
  const [setUser] = useSetUserMutation();

  // ** State
  const [loading, setLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (payload: FormValues) => {
    setLoading(true);
    setUser(payload)
      .unwrap()
      .then(() => {
        console.log("user added");
        setLoading(false);
      })
      .catch((error) => {
        console.log("Failed to add user");
        setLoading(false);
      });
    reset(defaultValues);
  };

  return (
    <>
      <main className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -mx-4 py-28 gap-y-2">
            <div className="w-full md:w-1/1 px-1">
              <Input
                type="text"
                placeholder="First Name"
                className="mt-1"
                rounded="rounded-2xl"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && <>{errors.firstName.message}</>}
            </div>
            <div className="w-full md:w-1/1 px-1">
              <Input
                type="text"
                placeholder="Last Name"
                className="mt-1"
                rounded="rounded-2xl"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && <>{errors.lastName.message}</>}
            </div>
            <div className="w-full md:w-1/1 px-1">
              <Input
                type="text"
                placeholder="Email"
                className="mt-1"
                rounded="rounded-2xl"
                {...register("email", { required: true })}
              />
              {errors.email && <>{errors.email.message}</>}
            </div>
            <div className="w-full md:w-1/1 px-5 text-end">
              <button type="submit" disabled={loading}>
                {loading ? "Please wait" : "Submit"}
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default AddCustomer;
