const StarRating = ({ rating }) => {
  const svgRating = [];
  for (let i = 0; i <= 9; i++) {
    if (rating > i && rating - i >= 1) {
      svgRating.push("full.svg");
    } else if (rating - i >= 0.5) {
      svgRating.push("half.svg");
    } else {
      svgRating.push("empty.svg");
    }
  }
  return (
    <div className="flex items-center justify-center gap-0.5">
      {svgRating.map((star, index) => (
        <img className="w-4" key={index} src={`/public/${star}`} alt="" />
      ))}
    </div>
  );
};

export default StarRating;
