import React, { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim } from "../../animations";
import K from "../../assets/k.png";
import E from "../../assets/e.png";
import N from "../../assets/n.png";
import O from "../../assets/o.png";
import Tm from "../../assets/tm.png";
function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div
      className="preloader"
      style={{
        backgroundColor: "#f9f4ed",
      }}
    >
      <div className="texts-container ">
        <span>
          <img src={K} alt="" />
        </span>
        <span>
          <img src={E} alt="" />
        </span>
        <span>
          <img src={N} alt="" />
        </span>
        <span>
          <img src={K} alt="" />
        </span>
        <span>
          <img src={O} alt="" />
        </span>
        <span>
          <img src={Tm} alt="" className=" mb-5" />
        </span>
      </div>
    </div>
  );
}

export default PreLoader;
