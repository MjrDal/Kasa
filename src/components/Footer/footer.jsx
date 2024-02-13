import Logo from "../../assets/logo.svg";
import "../../styles/footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer_logo" alt="Logo Kasa" src={Logo} />
      <p className="footer_txt">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
