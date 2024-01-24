import rentals from "../../datas/db.json";
import RentalCard from "../../components/RentalCard/RentalCard.jsx";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="banner">
          <p>Chez vous, partout et ailleurs</p>
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
