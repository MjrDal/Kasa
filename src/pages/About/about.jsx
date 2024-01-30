import CollapseFiabilite from "../../components/Collapse/fiabilite";
import CollapseRespect from "../../components/Collapse/respect";
import CollapseSecurite from "../../components/Collapse/securite";
import CollapseService from "../../components/Collapse/service";
import "../../styles/about.scss";

function About() {
  return (
    <div className="about">
      <div className="about_banner">
        <div className="about_banner_img"></div>
      </div>
      <div className="collaps">
        <CollapseFiabilite />
        <CollapseRespect />
        <CollapseService />
        <CollapseSecurite />
      </div>
    </div>
  );
}
export default About;
