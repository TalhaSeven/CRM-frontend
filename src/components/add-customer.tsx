import Input from "@/components/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { addUser } from "@/store/apps/user";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

const userFormSchema = yup.object().shape({
  firstName: yup.string().required("Please enter your first name"),
  lastName: yup.string().required("Please enter your last name"),
  email: yup.string().required("Please enter your email"),
});

const defaultValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
};

function AddCustomer() {
  // ** Redux
  const dispatch = useDispatch<AppDispatch>();

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(userFormSchema),
  });

  const onSubmit = (payload: FormValues) => {
    dispatch(addUser(payload));
    reset(defaultValues);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center text-center space-y-2 p-5">
          <div className="w-full md:w-1/2 px-1">
            <Input
              type="text"
              placeholder="Fist Name"
              className="mt-1"
              rounded="rounded-2xl"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && <>{errors.firstName.message}</>}
          </div>
          <div className="w-full md:w-1/2 px-1">
            <Input
              type="text"
              placeholder="Last Name"
              className="mt-1"
              rounded="rounded-2xl"
              {...register("lastName", { required: true })}
            />
            {errors.lastName && <>{errors.lastName.message}</>}
          </div>
          <div className="w-full md:w-1/2 px-1">
            <Input
              type="text"
              placeholder="Email"
              className="mt-1"
              rounded="rounded-2xl"
              {...register("email", { required: true })}
            />
            {errors.email && <>{errors.email.message}</>}
          </div>
          <div className="w-full md:w-2/2 py-5">
            <button type="submit" className="text-red-500">
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddCustomer;
