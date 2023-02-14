import React from "react";
import page from "./page.module.scss";
import layout from "./layout.module.scss";
import Form from "./Form";

const Card = () => {
  return (
    <div className={page.card}>
      <div className={page.box_wrap_text}>
        <div className={layout.layout}>
          <h1 className={page.card__heading}>
            Learn to code by watching others
          </h1>
          <div className={page.card__text}>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </div>
        </div>
      </div>
      <div className={page.box_wrap_form}>
        <div className={layout.layout}>
          <div className={page.card__proposition}>
            <div className={page.card__proposition_text}>
              <span className={page.proposition_main}>Try it free 7 days</span>
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
