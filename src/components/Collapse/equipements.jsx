import PropTypes from "prop-types";
import { useState } from "react";
import "../../styles/about.scss";

function CollapseEquipements({ equipements }) {
  const [isOpen, setIsOpen] = useState(true);

  function animateFunction() {
    const animateId = document.getElementById("animateArrowEquipement");
    const animateTranslateId = document.getElementById("animateTxtEquipement");
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
        <p>Equipements</p>
        <i
          className="fa-solid fa-chevron-up"
          id="animateArrowEquipement"
          onClick={() => animateFunction()}
        ></i>
      </div>
      <div className="texte">
        <ul className="p" id="animateTxtEquipement"></ul>
      </div>
    </div>
  ) : (
    <div className="collaps">
      <div className="collaps_link">
        <p>Equipements</p>
        <i
          className="fa-solid fa-chevron-up"
          id="animateArrowEquipement"
          onClick={() => animateFunction()}
        ></i>
      </div>
      <div className="texte">
        <ul className="p" id="animateTxtEquipement">
          {equipements.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

CollapseEquipements.propTypes = {
  equipements: PropTypes.array,
};

export default CollapseEquipements;
