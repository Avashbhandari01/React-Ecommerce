import { useState, useEffect } from "react";
import axios from "axios";
import RatingReview from "./RatingReview";

function Card() {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [isProductLoaded, setIsProductLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const convertRating = response.data.map((product) => ({
          ...product,
          rating: {
            rate: Math.round(product.rating.rate),
            count: product.rating.count,
          },
        }));
        setProducts(convertRating);
        setVisibleProducts(convertRating.slice(0, 12));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const loadMoreProducts = () => {
    setVisibleProducts(products);
    setIsProductLoaded(true);
  };

  return (
    <>
      <div className="flex flex-wrap gap-10 justify-between">
        {visibleProducts.map((product) => (
          <div
            className="bg-white-300 w-[20%] h-[26rem] rounded-xl border border-stone-300 flex flex-col justify-between"
            key={product.id}
          >
            <div className="flex justify-center pt-4">
              <img
                src={product.image}
                alt="Product Image"
                className="rounded-xl w-[90%] h-60 object-contain"
              />
            </div>
            <div className="flex flex-col px-5 py-2 flex-grow">
              <h2 className="text-lg font-semibold truncate max-h-12">
                {product.title}
              </h2>
              <p className="text-md">$ {product.price}</p>
              <RatingReview
                rating={product.rating.rate}
                count={product.rating.count}
              />
              <button className="bg-[#4a596a] text-white rounded h-10 w-full mt-2 self-start">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        {!isProductLoaded && (
          <div className="flex justify-center">
            <button
              onClick={loadMoreProducts}
              className="bg-[#4a596a] text-white rounded h-10 w-56"
              style={{ alignSelf: "center" }}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Card;
