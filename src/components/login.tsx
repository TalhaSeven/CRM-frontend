import Input from "@/components/input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { login } from "@/store/apps/login";
import { useRouter } from "next/router";
import Menu from "./menu";

type FormValues = {
  email: string;
  password: string;
};
const loginFormSchema = yup.object().shape({
  email: yup.string().required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});

const defaultValues: FormValues = {
  email: "",
  password: "",
};

const Login = () => {
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
    resolver: yupResolver(loginFormSchema),
  });
  const router = useRouter();

  const onSubmit = (payload: FormValues) => {
    dispatch(login(payload));
    reset(defaultValues);
    router.push("/");
  };
  return (
    <>
      <Menu />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-center text-center space-y-2 p-5">
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
          <div className="w-full md:w-1/2 px-1">
            <Input
              type="text"
              placeholder="Password"
              className="mt-1"
              rounded="rounded-2xl"
              {...register("password", { required: true })}
            />
            {errors.password && <>{errors.password.message}</>}
          </div>
          <div className="w-full md:w-2/2 py-5">
            <button type="submit" className="text-red-500">
              Send
            </button>
          </div>
        </div>
      </form>
      <br />
    </>
  );
};

export default Login;
