import React from "react";
import PropTypes from "prop-types";
import {Trans} from "react-i18next";

export const StartupPage = ({item, t}) => {
  StartupPage.propTypes = {
    item: () => ({
      id: PropTypes.string,
      title: PropTypes.string,
      shortText: PropTypes.string,
      text: PropTypes.string,
      bg: PropTypes.string,
    }),
  };

  return (
    <section
      id={item.id}
      className="section section-fullscreen section-lightGray"
      style={{top: 0, background: item.bg}}
    >
      <div className="section-content">
        <div className="section-title font-size-2 font-title text-align-center">
          {t(item.title)}
        </div>
        <div className="font-size-3 description">
          <div>
            <Trans
              t={t}
              i18nKey={t(item.text)}
              components={[
                <a
                  key={`linkWM`}
                  href={
                    (item.links &&
                      item.links.website &&
                      item.links.website.link) ||
                    ""
                  }
                  rel="noreferrer noopener"
                  target="_blank"
                  aria-label={t(item.text)}
                />,
              ]}
            />
          </div>
        </div>
        {item.links && (
          <div className="btnListWrapper" style={{marginTop: "1rem"}}>
            {Object.values(item.links).map((x, i) => (
              <button
                key={i}
                className="btn-outline btn-anim font-size-4"
                onClick={() => window.open(x.link)}
              >
                {t(x.title)}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
