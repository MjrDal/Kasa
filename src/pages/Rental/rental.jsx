import { Navigate, useParams } from "react-router-dom";
import CollapseDescription from "../../components/Collapse/description";
import CollapseEquipements from "../../components/Collapse/equipements";
import Rating from "../../components/Rating/Rating";
import Slideshow from "../../components/Slideshow/Slideshow";
import rentals from "../../datas/db.json";
import "../../styles/rental.scss";

function Rental() {
  // récupération de l'id dans l'url
  const { idRental } = useParams();

  // ont place dans le tableau l'appartement correspondant à l'id
  const rental = rentals.find((obj) => idRental === obj.id);
  console.log();
  return rental ? (
    <div className="rental">
      <div className="rental_container">
        <Slideshow pictures={rental.pictures} />
        <div className="rental_description">
          <div className="rental_title">
            <div className="title">
              <h3>{rental.title}</h3>
              <p>{rental.location}</p>
              <div className="tags">
                {rental.tags.map((tag, index) => (
                  <div className="tag" key={index}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            <div className="rental_host">
              <div className="rental_name">
                <p className="name">{rental.host.name}</p>
                <img
                  src={rental.host.picture}
                  alt="portrait de l'auteur"
                  className="picture"
                />
              </div>
              <Rating rating={rental.rating} />
            </div>
          </div>
        </div>

        <div className="rental_collaps">
          <CollapseDescription description={rental.description} />
          <CollapseEquipements equipements={rental.equipments} />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/error" replace={true} />
  );
}

export default Rental;
