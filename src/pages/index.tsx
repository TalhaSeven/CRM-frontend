import Login from "@/components/login";
import { AppDispatch, RootState } from "@/store";
import { handleToken } from "@/store/apps/login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@/components/menu";
import Link from "next/link";

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
      <Menu />
      <main className={`max-w-7xl mx-auto`}>
        <div className="flex flex-wrap -mx-4 py-2 text-center">
          <div className="w-full md:w-1/4 px-3">
            <Link href="/new-customer">New Customer</Link></div>
          <div className="w-full md:w-1/4 px-3"><Link href="/customer">Customer</Link></div>
          <div className="w-full md:w-1/4 px-3"><Link href="/new-meeting">New Meeting</Link></div>
          <div className="w-full md:w-1/4 px-3"><Link href="/calender">Calender</Link></div>
        </div>
      </main>
    </>
  );
}
