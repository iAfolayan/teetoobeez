import StarRatingIcon from "@/svgs/rating-star";

interface Props {
  rating: number;
}

const StarRating: React.FC<Props> = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<StarRatingIcon key={i} />);
    } else {
      stars.push(<StarRatingIcon key={i} fill="#D9D9D9" />);
    }
  }
  return <div className="flex">{stars}</div>;
};

export default StarRating;
