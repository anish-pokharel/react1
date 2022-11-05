import React from "react";
import Common from "./common/Common";

const Contact = () => {
  return (
    <>
      <section className="contant creative">
        <div className="container">
          <div className="itemContent">
            <Common title="contact" />
            <div className="content flex">
              <div className="contentRight">
                <img src="./images/contact-bg.jpg" alt="" />
              </div>
              <div className="contentLeft">
                <span>
                  <i className="fa fa-map-marker-alt">Kathmandu Nepal</i>
                </span>
                <br />
                <br />
                <span>
                  <i className="fa fa-envelope">
                    anish.pokharel.710.ap@gmail.com
                  </i>
                </span>
                <br />
                <br />
                <span>
                  <i className="fa fa-phone">+977-9867419921</i>
                </span>
                <form action="">
                  <input type="text" placeholder="your name " name="" id="" />
                  <input type="text" placeholder="your email " name="" id="" />
                  <input
                    type="text"
                    placeholder="what are you intrested in  "
                    name=""
                    id=""
                  />
                  <textarea name="" id="" cols="30" rows="10">
                    your message
                  </textarea>
                  <button className="primary-btn">
                    SUBMIT <i className="fa fa-long-arrow-alt-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
