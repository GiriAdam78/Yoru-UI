import Image from "next/image";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Navbar/>
       <main className="flex-1">
        <div className="container">
          <Banner/>
        </div>
       </main>
    </>
  );
}
