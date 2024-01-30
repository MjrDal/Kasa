import { useState } from "react";
import "../../styles/about.scss";
import "../../styles/animation.scss";

function CollapseSecurite() {
  const [isOpen, setIsOpen] = useState(true);

  function animateFunction() {
    const animateId = document.getElementById("animateArrowSecurite");
    const animateTranslateId = document.getElementById("animateTxtSecurite");
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
        <p>Sécurité</p>
        <i
          className="fa-solid fa-chevron-up"
          id="animateArrowSecurite"
          onClick={() => animateFunction()}
        ></i>
      </div>
      <div className="texte">
        <div className="p" id="animateTxtSecurite"></div>
      </div>
    </div>
  ) : (
    <div className="collaps">
      <div className="collaps_link">
        <p>Sécurité</p>
        <i
          className="fa-solid fa-chevron-up"
          id="animateArrowSecurite"
          onClick={() => animateFunction()}
        ></i>
      </div>
      <div className="texte">
        <div className="p" id="animateTxtSecurite">
          La sécurtité est la priorité de Kasa. Aussi bien pour nos hotes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurtité établis par nos services. En laissant une note aussi bien à
          l&apos;hote qu&apos;au locataire, cela permet à nos équipes de
          vérifier que les standards sont bien respectés. Nous organisons
          également des ateliers sur la sécurté domestique pour nos hotes.
        </div>
      </div>
    </div>
  );
}

export default CollapseSecurite;
