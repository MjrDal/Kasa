import PropTypes from "prop-types";
import { useState } from "react";
import "../../styles/rental.scss";

function Slideshow({ pictures }) {
  const [picture, setPicture] = useState(0);
  console.log(picture);

  // fonction pour faire fonctionner le carrousel vers la droite
  function carrouselRight() {
    if (picture === pictures.length - 1) {
      setPicture(0);
    } else {
      setPicture(picture + 1);
    }
  }

  // fonction pour faire fonctionner le carrousel vers la gauche
  function carrouselLeft() {
    if (picture === 0) {
      setPicture(pictures.length - 1);
    } else {
      setPicture(picture - 1);
    }
  }

  return (
    <div className="slideshow">
      <div className="arrows">
        <i
          className="fa-solid fa-chevron-right"
          onClick={() => carrouselRight()}
        ></i>
        <i
          className="fa-solid fa-chevron-left"
          onClick={() => carrouselLeft()}
        ></i>
      </div>
      <img
        className="rental_img"
        src={pictures[picture]}
        alt="Photo de la proprété"
      />
    </div>
  );
}

Slideshow.propTypes = {
  pictures: PropTypes.array,
};

export default Slideshow;
