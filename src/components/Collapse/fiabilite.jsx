import { useState } from "react";
import "../../styles/about.scss";
import "../../styles/animation.scss";

function CollapseFiabilite() {
  const [isOpen, setIsOpen] = useState(true);

  function animateFunction() {
    const animateId = document.getElementById("animateArrow");
    const animateTranslateId = document.getElementById("animateTxt");
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
        <p>Fiabilité</p>
        <i
          className="fa-solid fa-chevron-up"
          id="animateArrow"
          onClick={() => animateFunction()}
        ></i>
      </div>
      <div className="texte">
        <div className="p" id="animateTxt"></div>
      </div>
    </div>
  ) : (
    <div className="collaps">
      <div className="collaps_link">
        <p>Fiabilité</p>
        <i
          className="fa-solid fa-chevron-up"
          id="animateArrow"
          onClick={() => animateFunction()}
        ></i>
      </div>
      <div className="texte">
        <div className="p" id="animateTxt">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </div>
      </div>
    </div>
  );
}

export default CollapseFiabilite;
