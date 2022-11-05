import React from "react";
import { creative } from "../dummydate";
import Common from "./common/Common";

const Creative = () => {
  return (
    <>
      <section className="creative">
        <div className="container">
          <div className="itemContent">
            <Common title="creative" />
            {creative.map((val) => {
              return (
                <div className="content flex">
                  <i className="fa fa-quote-left quote">
                    <h1>{val.heading}</h1>
                    <h3>{val.title}</h3>
                    <p>{val.desc}</p>
                    <button className="primary-btn">
                      DOWNLOAD RESUME{" "}
                      <i className="fa fa-long-arrow-alt-right"></i>
                    </button>
                  </i>
                  <div className="contentRight">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Creative;
