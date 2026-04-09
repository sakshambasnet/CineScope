import "./style.scss";
import { useNavigate } from "react-router-dom";
const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="notFoundPage">
      <div className="contentWrapper">
        <div className="badge">404</div>
        <div className="title">Page not found</div>
        <div className="subtitle">
          The page you’re looking for doesn’t exist or was moved.
        </div>
        <button className="cta" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;

