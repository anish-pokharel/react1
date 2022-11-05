import React from "react";
import { portfolio } from "../dummydate";
import Common from "./common/Common";
import Slider from "react-slick";

const Portfolio = () => {
  const settings = {};
  return (
    <>
      <section className="portfolio creative">
        <div className="container">
          <Slider {...settings}>
            {portfolio.map((val) => {
              return (
                <>
                  <div className="itemContent flex">
                    <Common title="portfolio" />
                    <div className="contentRight">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="contentLeft">
                      <h1>{val.title}</h1>
                      <p>{val.desc}</p>
                      <ul>
                        <li>
                          <i className="fa fa-minus">{val.p1}</i>
                        </li>
                        <li>
                          <i className="fa fa-minus">{val.p2}</i>
                        </li>
                        <li>
                          <i className="fa fa-minus">{val.p3}</i>
                        </li>
                        <li>
                          <i className="fa fa-minus">{val.p4}</i>
                        </li>
                        <li>
                          <i className="fa fa-minus">{val.p5}</i>
                        </li>
                      </ul>
                      <button className="primary-btn">
                        View Website
                        <i className="fa fa-long-arrow-alt-right"></i>
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
