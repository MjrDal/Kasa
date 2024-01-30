import { useState } from "react";
import "../../styles/about.scss";
import "../../styles/animation.scss";

function CollapseRespect() {
  const [isOpen, setIsOpen] = useState(true);

  function animateFunction() {
    const animateId = document.getElementById("animateArrowRespect");
    const animateTranslateId = document.getElementById("animateTxtRespect");
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
        <p>Respect</p>
        <i
          className="fa-solid fa-chevron-up"
          id="animateArrowRespect"
          onClick={() => animateFunction()}
        ></i>
      </div>
      <div className="texte">
        <div className="p" id="animateTxtRespect"></div>
      </div>
    </div>
  ) : (
    <div className="collaps">
      <div className="collaps_link">
        <p>Respect</p>
        <i
          className="fa-solid fa-chevron-up"
          id="animateArrowRespect"
          onClick={() => animateFunction()}
        ></i>
      </div>
      <div className="texte">
        <div className="p" id="animateTxtRespect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entrainera une exclusion de notre plateforme.
        </div>
      </div>
    </div>
  );
}

export default CollapseRespect;
