import Collapse from "../../components/Collapse/Collapse";
import "../../styles/about.scss";

function About() {
  const dataCollaps = [
    {
      title: "Fiabilité",
      contend:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      contend:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      contend:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.",
    },
    {
      title: "Sécurité",
      contend:
        "La sécurtité est la priorité de Kasa. Aussi bien pour nos hotes que pour les voyageurs, chaque logement correspond aux critères de sécurtité établis par nos services. En laissant une note aussi bien à l&apos;hote qu&apos;au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurté domestique pour nos hotes.",
    },
  ];
  console.log(dataCollaps[0].title);
  return (
    <div className="about">
      <div className="about_banner">
        <div className="about_banner_img"></div>
      </div>
      <div className="about_collaps">
        <Collapse
          title={dataCollaps[0].title}
          contend={dataCollaps[0].contend}
        />

        <Collapse
          title={dataCollaps[1].title}
          contend={dataCollaps[1].contend}
        />

        <Collapse
          title={dataCollaps[2].title}
          contend={dataCollaps[2].contend}
        />

        <Collapse
          title={dataCollaps[3].title}
          contend={dataCollaps[3].contend}
        />
      </div>
    </div>
  );
}
export default About;
