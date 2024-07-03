import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import Card from "../components/Card";

function Home() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-center mt-10 px-20">
        <div>
          <h1 className="mb-10 text-4xl font-semibold">Browse Products</h1>
          <Dropdown />
        </div>
        <div className="my-10 flex flex-row flex-wrap gap-[4rem]">
          <Card />
        </div>
      </div>
    </>
  );
}

export default Home;
