/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "../../styles/rentalCard.scss";

function RentalCard({ id, title, cover }) {
  return (
    <li className="rentalCard">
      <Link className="rentalCard_link" to={`/rental/${id}`}>
        <img
          className="rentalCard_img"
          src={cover}
          alt="image de la location"
        />
        <span className="rentalCrad_title">{title}</span>
      </Link>
    </li>
  );
}

export default RentalCard;
