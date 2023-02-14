import React from "react";
import Page from "./page.module.scss";
import Layout from "./layout.module.scss";
import Form from "./Form";

const Card = () => {
  return (
    <div className={Page.card}>
      <div className={Page.box_wrap_text}>
        <div className={Layout.layout}>
          <h1 className={Page.card__heading}>
            Learn to code by watching others
          </h1>
          <div className={Page.card__text}>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </div>
        </div>
      </div>
      <div className={Page.box_wrap_form}>
        <div className={Layout.layout}>
          <div className={Page.card__proposition}>
            <div className={Page.card__proposition_text}>
              <span className={Page.proposition_main}></span>Try it free 7 days
              then
              <span>$</span>
              <span>20</span>/mo. thereafter
            </div>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Card;
