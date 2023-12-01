import Login from "@/components/login";
import { AppDispatch, RootState } from "@/store";
import { handleToken } from "@/store/apps/login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@/components/menu";

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
      <Menu/>
      <main
        className={`flex flex-col items-center justify-between p-10`}>
        <hr />
        {loading ? "Loading" : ""}
        {data.user?.firstName} {data.user?.lastName}
      </main>
    </>
  );
}
