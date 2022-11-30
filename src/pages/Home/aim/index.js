import React from "react";
import TweenOne from "rc-tween-one";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import {splitTextByWords} from "../../../fucntions/splitText";

const ScrollOverPack = ScrollAnim.OverPack;

export const OurAim = () => {
  const getTextAnim = () => (
    <TextyAnim type="bottom" split={splitTextByWords} duration={1500}>
      Make the world sustainable and better than it was before, improve the
      lives of millions of people worldwide
    </TextyAnim>
  );

  return (
    <section id={"ourAim"} className="section section-fullscreen section-white">
      <div className="section-content" style={{maxWidth: 800}}>
        <ScrollOverPack replay always={false} playScale={0.2}>
          <TweenOne
            className="section-title font-size-1 font-title text-align-center"
            animation={{opacity: 1}}
            style={{opacity: 0.001}}
          >
            Our aim
          </TweenOne>
        </ScrollOverPack>
        <ScrollOverPack replay always={false} playScale={0.2}>
          <TweenOne
            className="font-size-2 text-align-center"
            animation={{opacity: 1}}
            style={{opacity: 0.001, maxWidth: 900}}
          >
            {getTextAnim()}
          </TweenOne>
        </ScrollOverPack>
      </div>
    </section>
  );
};
