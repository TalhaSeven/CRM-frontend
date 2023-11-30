import Login from "@/components/login";
import { AppDispatch, RootState } from "@/store";
import { handleToken } from "@/store/apps/login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  
  // ** Redux
  const dispatch = useDispatch<AppDispatch>();
  // ** Selectors
  const data: any = useSelector((state: RootState) => state.login.data);
  const loading: boolean = useSelector(
    (state: RootState) => state.login.loading
  );
  const isToken: boolean = useSelector(
    (state: RootState) => state.login.isToken
  );

  useEffect(() => {
    dispatch(handleToken());
  }, [dispatch]);

  return (
    <>
      <h1 className="text-center text-2xl text-white bg-orange-400 flex justify-center items-center h-40">
        Hello World
      </h1>

      <div className="w-full md:w-2/2 px-1 text-black text-center">
        {!isToken ? <Login /> : "Login Success"}<br />
        {loading && <p>Loading...</p>}
        {data.user?.firstName} {data.user?.lastName}
      </div>
    </>
  );
}
