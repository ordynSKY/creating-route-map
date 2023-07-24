import { FC, useState } from "react";
import "./Modal.css";
import { IModal } from "./types";
import RouteForm from "../Routes/RouteForm";
import GoogleMapsForm from "../GoogleMap/GoogleMapsForm";

const Modal: FC<IModal> = ({ active, setActive }) => {
  const [length, setLength] = useState<number>(0);

  const [mapKey, setMapKey] = useState<number>(0);

  return (
    <div className={active ? "modal active" : "modal"}>
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-title">
          Add new path
          <button onClick={() => setActive(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path d="M0.292534 0.683989C0.4799 0.510287 0.733989 0.412707 0.998925 0.412707C1.26386 0.412707 1.51795 0.510287 1.70532 0.683989L6.99375 5.58824L12.2822 0.683989C12.3744 0.595494 12.4846 0.524907 12.6065 0.476347C12.7284 0.427787 12.8595 0.402227 12.9922 0.401158C13.1248 0.400089 13.2564 0.423532 13.3792 0.47012C13.502 0.516708 13.6135 0.585508 13.7074 0.672504C13.8012 0.759501 13.8754 0.862952 13.9256 0.976822C13.9758 1.09069 14.0011 1.2127 14 1.33573C13.9988 1.45876 13.9712 1.58034 13.9189 1.69338C13.8665 1.80642 13.7904 1.90866 13.695 1.99414L8.40654 6.89838L13.695 11.8026C13.877 11.9774 13.9777 12.2114 13.9754 12.4544C13.9731 12.6973 13.8681 12.9297 13.6828 13.1015C13.4976 13.2733 13.247 13.3707 12.985 13.3728C12.723 13.375 12.4706 13.2816 12.2822 13.1128L6.99375 8.20853L1.70532 13.1128C1.51688 13.2816 1.26449 13.375 1.00252 13.3728C0.74055 13.3707 0.489953 13.2733 0.304705 13.1015C0.119457 12.9297 0.0143782 12.6973 0.0121017 12.4544C0.00982525 12.2114 0.110533 11.9774 0.292534 11.8026L5.58097 6.89838L0.292534 1.99414C0.105225 1.82038 0 1.58475 0 1.33906C0 1.09337 0.105225 0.857744 0.292534 0.683989Z"></path>
            </svg>
          </button>
        </div>
        <div style={{ display: "flex" }}>
          <div className="routeForm">
            <RouteForm
              setActive={setActive}
              maxLength={160}
              length={length}
              setMapKey={setMapKey}
              setLength={setLength}
            />
          </div>
          <div style={{ margin: "30px 30px 30px 20px" }}>
            <GoogleMapsForm setLength={setLength} mapKey={mapKey} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
