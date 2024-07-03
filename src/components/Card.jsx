import Image1 from "../assets/Foosball.png";
import RatingReview from "./RatingReview";

function Card() {
  return (
    <>
      <div className="bg-white-300 w-[20%] h-[27rem] rounded-xl border border-stone-300">
        <div className="flex justify-center pt-4">
          <img
            src={Image1}
            alt="Product Image"
            className="rounded-xl w-[90%]"
          />
        </div>
        <div className="flex flex-col px-5 py-2">
          <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
          <p>$ 109.95</p>
          <RatingReview rating={4} />
          <button className="bg-[#4a596a] text-white rounded h-10 mt-2">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Card;
