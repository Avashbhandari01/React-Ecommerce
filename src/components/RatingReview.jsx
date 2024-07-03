function RatingReview({ rating }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div>
      {stars.map((star) => (
        <span
          key={star}
          className="star"
          style={{
            color: rating >= star ? "gold" : "gray",
            fontSize: "20px",
          }}
        >
          ★
        </span>
      ))}
      <span className="pl-5">120 reviews</span>
    </div>
  );
}

export default RatingReview;
