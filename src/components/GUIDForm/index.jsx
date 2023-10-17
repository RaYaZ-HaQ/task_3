import Button from "../Button";
import "./GUIDForm.css";
import { useState, useCallback } from "react";

const STATUS = {
  INIT: "init",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

/* eslint-disable react/prop-types */
export default function GUIDForm() {
  const [guid, setGuid] = useState("");
  const [status, setStatus] = useState(STATUS.INIT);
  const verifyGUID = useCallback((guid) => {
    if (
      guid.match(
        "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$"
      )
    ) {
      setStatus(STATUS.SUCCESS);
    } else setStatus(STATUS.ERROR);
  }, []);

  async function simulateDelay(callback, delay) {
    await new Promise(() => setTimeout(callback, delay));
  }

  return (
    <form className="flex-container-column spacing-20">
      <div className="flex-container items-center">
        <label>Enter a valid GUID here.</label>
        {status === STATUS.ERROR && (
          <span className="pill error">GUID Invalid</span>
        )}
      </div>
      <input
        type="text"
        name="guid"
        id="guid"
        className="text-field"
        disabled={status === STATUS.LOADING}
        onChange={(e) => setGuid(e.target.value)}
      />
      <Button
        onClick={(e) => {
          e.preventDefault();
          if (guid) {
            setStatus(STATUS.LOADING);
            simulateDelay(() => verifyGUID(guid), 2000);
          }
        }}
        loading={status === STATUS.LOADING}
        success={status === STATUS.SUCCESS}
      >
        Submit
      </Button>
    </form>
  );
}
