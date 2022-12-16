import React from "react";
import TextyAnim from "rc-texty";
import ScrollAnim from "rc-scroll-anim";
import TweenOne from "rc-tween-one";
import {Tooltip as ReactTooltip} from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import {splitTextByWords} from "../../../fucntions/splitText";
import "./info.scss";
import "./index.scss";

const ScrollOverPack = ScrollAnim.OverPack;

const ListPage = ({t, config}) => {
  const listItems = t(config.list, {returnObjects: true});

  return (
    <section
      id={config.id}
      className={`section ${config.sectionTheme}`}
    >
      <div className={`section-content`}>
        <ScrollOverPack replay always={false} playScale={0.2}>
          <TweenOne
            className="section-title font-size-2 font-title text-center"
            animation={{opacity: 1}}
            style={{opacity: 0.001}}
          >
            {t(config.title)}
          </TweenOne>
        </ScrollOverPack>
        <ScrollOverPack replay always={false} playScale={0.2}>
          <TextyAnim
            className="font-size-4 text-align-center"
            type="bottom"
            split={splitTextByWords}
            interval={2}
            style={{maxWidth: 700}}
          >
            {t(config.text)}
          </TextyAnim>
        </ScrollOverPack>

        <div className="listPage-list">
          {listItems.map((x, i) => (
            <ScrollOverPack
              key={i}
              className="listPage-list-item"
              replay
              always={false}
              playScale={0.2}
            >
              <TweenOne
                className="font-size-4"
                animation={{opacity: 1, duration: 300, delay: i * 300}}
                style={{opacity: 0.001}}
              >
                <div key={i} style={{display: "flex", alignItems: "center"}}>
                  <div className="list-index">{i + 1}</div>
                  {typeof x === "string" ? (
                    <div>{x}</div>
                  ) : (
                    <>
                      <div>{x.text}</div>
                      {x.note && (
                        <>
                          <div id={`tooltip_${i}`} className="list-infoBtn">
                            i
                          </div>
                          <ReactTooltip
                            className="tooltip"
                            anchorId={`tooltip_${i}`}
                            place="right"
                            content={x.note}
                          />
                        </>
                      )}
                    </>
                  )}
                </div>
              </TweenOne>
            </ScrollOverPack>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListPage;
