import PropTypes from "prop-types";
import { useState } from "react";
import "../../styles/about.scss";

function CollapseEquipements({ equipements }) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="collaps">
      <div className="collaps_link">
        <p>Equipements</p>
        <i
          className="fa-solid fa-chevron-up"
          onClick={() => setIsOpen(false)}
        ></i>
      </div>
    </div>
  ) : (
    <div className="collaps">
      <div className="collaps_link">
        <p>Equipements</p>
        <i
          className="fa-solid fa-chevron-down"
          onClick={() => setIsOpen(true)}
        ></i>
      </div>
      <div>
        <p>{equipements}</p>
      </div>
    </div>
  );
}

CollapseEquipements.propTypes = {
  equipements: PropTypes.string,
};

export default CollapseEquipements;
