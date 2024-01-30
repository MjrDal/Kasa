import RentalCard from "../../components/RentalCard/RentalCard.jsx";
import rentals from "../../datas/db.json";
import "../../styles/home.scss";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="banner">
          <div className="banner_img">
            <p>
              Chez vous,
              <br /> partout et ailleurs
            </p>
          </div>
        </div>
        <ul className="container_card">
          {rentals.map(({ id, title, cover }) => (
            <div key={id}>
              <RentalCard id={id} title={title} cover={cover} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
