import "./Button.css";
import CheckIcon from "../../assets/icons/CheckIcon";
import LoaderIcon from "../../assets/icons/LoaderIcon";

/* eslint-disable react/prop-types */
export default function Button({
  children,
  onClick,
  loading = false,
  success = false,
}) {
  return (
    <button
      onClick={onClick}
      className="button flex-container items-center border-black"
    >
      {!loading && success && <CheckIcon strokeColor="green" />}
      {loading && <LoaderIcon className="spin" />}
      <span style={{ marginLeft: loading || success ? "0.5rem" : "" }}>
        {children}
      </span>
    </button>
  );
}
