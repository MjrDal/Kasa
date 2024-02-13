import PropTypes from "prop-types";
import { useState } from "react";
import "../../styles/about.scss";
import "../../styles/animation.scss";

function Collapse({ title, contend }) {
  const [isOpen, setIsOpen] = useState(true);

  function animateFunction() {
    const animateId = document.getElementById(title);
    const animateTranslateId = document.getElementById(title + "txt");
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
        <p>{title}</p>
        <i
          className="fa-solid fa-chevron-up"
          id={title}
          onClick={() => animateFunction()}
        ></i>
      </div>
      <div className="texte">
        <div className="p" id={title + "txt"}></div>
      </div>
    </div>
  ) : (
    <div className="collaps">
      <div className="collaps_link">
        <p>{title}</p>
        <i
          className="fa-solid fa-chevron-up"
          id={title}
          onClick={() => animateFunction()}
        ></i>
      </div>
      <div className="texte">
        {Array.isArray(contend) ? (
          <div className="p" id={title + "txt"}>
            {contend.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </div>
        ) : (
          <div className="p" id={title + "txt"}>
            {contend}
          </div>
        )}
        {/* <div className="p" id={title + "txt"}>
          {contend}
        </div> */}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string,
  contend: PropTypes.node,
};

export default Collapse;
