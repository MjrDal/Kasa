import { Link } from "react-router-dom";
import "../../styles/error.scss";

function Error() {
  return (
    <div className="error">
      <p className="error_title">404</p>
      <p className="error_description">
        Oups! la page que vous demandez n&apos;existe pas.
      </p>
      <Link className="error_link" to="/">
        Retourner sur la page d&apos;acceil
      </Link>
    </div>
  );
}

export default Error;
