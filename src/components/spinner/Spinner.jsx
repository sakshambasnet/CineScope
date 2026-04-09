import PropTypes from "prop-types";
import "./style.scss";

const Spinner = ({ initial }) => {
    return (
        <div className={`loadingSpinner ${initial ? "initial" : ""}`}>
            <svg className="spinner" viewBox="0 0 50 50">
                <defs>
                    <linearGradient id="spinnerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff4b8b" />
                        <stop offset="45%" stopColor="#7b5cff" />
                        <stop offset="100%" stopColor="#00e0ff" />
                    </linearGradient>
                </defs>
                <circle
                    className="path"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                ></circle>
            </svg>
        </div>
    );
};

Spinner.propTypes = {
  initial: PropTypes.bool,
};

export default Spinner;