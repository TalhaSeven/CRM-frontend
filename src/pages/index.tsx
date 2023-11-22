import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="text-center text-2xl text-white bg-orange-400 flex justify-center items-center h-40">
        Hello World
      </h1>
    </>
  );
}
