import PropTypes from "prop-types";
import { useEffect } from "react";
import "../../styles/rental.scss";

function Rating({ rating }) {
  const ratingNumber = parseInt(rating, 10);

  useEffect(() => {
    function colorStars() {
      const stars = document.querySelectorAll(".fa-solid.fa-star");
      stars.forEach((star, index) => {
        if (index + 1 <= ratingNumber) {
          star.classList.remove("normal_color");
          star.classList.add("rating_color");
        } else {
          star.classList.remove("rating_color");
          star.classList.add("normal_color");
        }
      });
    }

    colorStars();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="rating">
      <i id="1" className="fa-solid fa-star normal_color"></i>
      <i id="2" className="fa-solid fa-star normal_color"></i>
      <i id="3" className="fa-solid fa-star normal_color"></i>
      <i id="4" className="fa-solid fa-star normal_color"></i>
      <i id="5" className="fa-solid fa-star normal_color"></i>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.string,
};

export default Rating;
