import ImgAbout from "../../assets/img-about.svg";

function About() {
  return (
    <div className="about">
      <img src={ImgAbout} alt="" className="about_img" />
      <div className="collaps">
        <div className="collaps_link">
          <p>Fiabilité</p>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <div className="collaps_link">
          <p>Respect</p>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <div className="collaps_link">
          <p>Service</p>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
        <div className="collaps_link">
          <p>Sécurité</p>
          <i className="fa-solid fa-chevron-up"></i>
        </div>
      </div>
    </div>
  );
}

export default About;
