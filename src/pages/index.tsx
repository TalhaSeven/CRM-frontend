import { Inter } from "next/font/google";
import Link from "next/link";
import Menu from "@/components/menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [customers, setCustomers] = useState([]);
  return (
    <>
      <Menu />
      <main className={`max-w-7xl mx-auto ${inter.className}`}>
        <div className="flex flex-wrap py-28 text-center">
          <div className="w-full md:w-1/4 px-3">
            <Link href="/customer">Customers</Link>
          </div>
          <div className="w-full md:w-1/4 px-3 whitespace-nowrap">
            <Link href="task">Task</Link>
          </div>
          <div className="w-full md:w-1/4 px-3">
            <Link href="/calender">Calender</Link>
          </div>
        </div>
      </main>
    </>
  );
}
