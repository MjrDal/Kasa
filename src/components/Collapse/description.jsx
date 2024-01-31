import PropTypes from "prop-types";
import { useState } from "react";
import "../../styles/animation.scss";
import "../../styles/rental.scss";

function CollapseDescription({ description }) {
  const [isOpen, setIsOpen] = useState(true);

  function animateFunction() {
    const animateId = document.getElementById("animateArrowDescription");
    const animateTranslateId = document.getElementById("animateTxtDescription");
    if (isOpen === true) {
      setIsOpen(false);
      animateId.classList.remove("clockwise_rotation_reverse");
      animateTranslateId.classList.remove("translate_reverse");
      animateId.classList.add("clockwise_rotation");
      animateTranslateId.classList.add("translate");
    } else if (isOpen === false) {
      setIsOpen(true);
      animateId.classList.remove("clockwise_rotation");
      animateTranslateId.classList.remove("translate");
      animateId.classList.add("clockwise_rotation_reverse");
      animateTranslateId.classList.add("translate_reverse");
    }
  }

  return isOpen ? (
    <div className="collaps">
      <div className="collaps_link">
        <p>Description</p>
        <i
          className="fa-solid fa-chevron-up"
          id="animateArrowDescription"
          onClick={() => animateFunction()}
        ></i>
      </div>
      <div className="texte">
        <div className="p" id="animateTxtDescription"></div>
      </div>
    </div>
  ) : (
    <div className="collaps">
      <div className="collaps_link">
        <p>Description</p>
        <i
          className="fa-solid fa-chevron-up"
          id="animateArrowDescription"
          onClick={() => animateFunction()}
        ></i>
      </div>
      <div className="texte">
        <div className="p" id="animateTxtDescription">
          {description}
        </div>
      </div>
    </div>
  );
}

CollapseDescription.propTypes = {
  description: PropTypes.string,
};

export default CollapseDescription;
