import React from "react";
// import validate from "react-common/utils/validate";
import { work } from "../dummydate";
import Common from "./common/Common";
const Work = () => {
  return (
    <>
      <section className="work creative education">
        <div className="container">
          <div className="itemContent">
            <Common title="employee"></Common>
            <div className="content flex">
              <div className="contentLeft">
                {work.map((val) => {
                  return (
                    <>
                      <div className="box flex ">
                        <button className="primary-btn">{val.years}</button>
                        <h2>
                          {val.compnay} <br />
                          <p>{val.desc}</p>
                        </h2>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="contentRight">
              <img src="./images/employment-bg.jpg" alt="" />g
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
