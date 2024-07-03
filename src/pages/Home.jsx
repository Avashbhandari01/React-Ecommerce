import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import Card from "../components/Card";
import { useState } from "react";

function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col justify-center mt-10 px-20">
        <div>
          <h1 className="mb-10 text-4xl font-semibold">Browse Products</h1>
          <Dropdown onSelectCategory={handleCategorySelect} />
        </div>
        <div className="my-10 flex flex-row flex-wrap gap-[4rem]">
          <Card category={selectedCategory} />
        </div>
      </div>
    </>
  );
}

export default Home;
