import { useParams } from "react-router-dom"
import rentals from '../../datas/db.json'
import Tags from "../../components/Tags/Tags";

function Rental() {
  // récupération de l'id dans l'url
  const {idRental} = useParams();
  
  // ont place dans le tableau l'appartement correspondant à l'id
  const rental = rentals.find((obj) => idRental === obj.id )
  console.log(rental.tags.map)
  return (
    <div className="rental">
      <div className="rental_container">
        <img className="rental_img" src={rental.cover}/>
        <div className="rental_title">
          <div className="title">
            <h2>{rental.title}</h2>
            <p>{rental.location}</p>
          </div>
          <div className="rental_name">
            <p className="name">{rental.host.name}</p>
            <img src={rental.host.picture} alt="portrait de l'auteur" className="picture" />
          </div>
        </div>
        <div className="rental_tags">
          <ul className="tags">
            {rental.tags.map(({tag}, index) =>
              <div key={index}>
                <Tags 
                tag={tag}
                />
              </div>
            )}
          </ul>
          <ul className="stars">

          </ul>
        </div>
        <div className="rental_description">

        </div>
      </div>
    </div>
  );
}
  
  export default Rental
  