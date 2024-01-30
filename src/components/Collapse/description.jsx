import PropTypes from "prop-types";
import { useState } from "react";
import "../../styles/rental.scss";

function CollapseDescription({ description }) {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="collaps">
      <div className="collaps_link">
        <p>Description</p>
        <i
          className="fa-solid fa-chevron-up"
          onClick={() => setIsOpen(false)}
        ></i>
      </div>
    </div>
  ) : (
    <div className="collaps">
      <div className="collaps_link">
        <p>Description</p>
        <i
          className="fa-solid fa-chevron-down"
          onClick={() => setIsOpen(true)}
        ></i>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </div>
  );
}

CollapseDescription.propTypes = {
  description: PropTypes.string,
};

export default CollapseDescription;
