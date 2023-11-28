import Login from "@/components/login";
import { RootState } from "@/store";
import { useSelector } from "react-redux";

export default function Home() {
  const data: any = useSelector((state: RootState) => state.login.data);
  const loading = useSelector((state: RootState) => state.login.loading);

  return (
    <>
      <h1 className="text-center text-2xl text-white bg-orange-400 flex justify-center items-center h-40">
        Hello World
      </h1>
      <Login />
      <div className="w-full md:w-2/2 px-1 text-black text-center">
        {loading && <p>Loading...</p>}
        {data.user?.firstName} {data.user?.lastName}
      </div>
    </>
  );
}
