import React from "react";
import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import {useTranslation} from "react-i18next";

import CategoryIconHexGrid from "../../../components/CategoryIconGrid/Hex";
import {gridConfig} from "./gridConfig";

const ScrollOverPack = ScrollAnim.OverPack;

const HomeStack = () => {
  const {t} = useTranslation("shared");

  return (
    <section className="section section-white" id="stack">
      <div className="section-content">
        <div className="section-title font-size-2 font-title text-align-center">
          {t("navigation.stack")}
        </div>

        <ScrollOverPack
          replay
          always={false}
          playScale={0.2}
          className="font-size-4 description"
          style={{maxWidth: 900, marginBottom: "2rem"}}
        >
          <TweenOne animation={{opacity: 1}} style={{opacity: 0.001}}>
            We have extensive experience and adapt to the information environment of the customer and take
            into account the wishes for development in order to implement our
            solutions.
          </TweenOne>
        </ScrollOverPack>
        <div>
          <CategoryIconHexGrid config={gridConfig} />
        </div>
      </div>
    </section>
  );
};

export default HomeStack;
