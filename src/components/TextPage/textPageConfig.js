/* Example config: {
  title: i18n key,
  text:  i18n key,
  list:  i18n key with list,
  sectionTheme:  css class (section.css: section-*),
  // If image NOT exist = FullScreen text section
  // If image exist = split section & safe img area
  image: {
    src: str filepath,
    min: str filepath
  },
}

*/

export const textPageConfig = {
  home: {
    activities: {
      title: "activities.title",
      text: "activities.text",
      image: {
        alt: "activities.text",
        title: "activities.title",
        src:
          process.env.PUBLIC_URL +
          "/static/images/index/sections/max/activities.webp",
        min:
          process.env.PUBLIC_URL +
          "/static/images/index/sections/min/activities.webp",
      },
      list: "activities.list",
      sectionTheme: "section-darkWhite",
    },
    solutions: {
      title: "solutions.title",
      text: "solutions.text",
      sectionTheme: "section-darkWhite",
      image: {},
    },
    healthyLifestyle: {
      title: "healthyLifestyle.title",
      text: "healthyLifestyle.text",
      sectionTheme: "section-darkWhite",
    },
    businessModel: {
      title: "businessModel.title",
      text: "businessModel.text",
      direction: "right",
      image: {
        alt: "businessModel.text",
        title: "businessModel.title",
        src:
          process.env.PUBLIC_URL +
          "/static/images/index/sections/max/businessDeal.webp",
        min:
          process.env.PUBLIC_URL +
          "/static/images/index/sections/min/businessDeal.webp",
      },
    },
  },
  modeling: {
    multiagent: {
      about: {
        title: "multiagent.about.title",
        text: "multiagent.about.texts",
        image: {
          alt: "multiagent.about.text",
          title: "multiagent.about.title",
          src:
            process.env.PUBLIC_URL +
            "/static/images/index/sections/max/traffic.webp",
          min:
            process.env.PUBLIC_URL +
            "/static/images/index/sections/min/traffic.webp",
        },
      },
      analysis: {
        title: "multiagent.analysis.title",
        text: "multiagent.analysis.texts",
        image: {},
      },
      payload: {
        title: "multiagent.payload.title",
        text: "multiagent.payload.texts",
        image: {},
      },
      capabilities: {
        title: "multiagent.capabilities.title",
        text: "multiagent.capabilities.text",
        list: "multiagent.capabilities.list",
        image: {},
      },
    },
    distribution: {
      about: {
        title: "distribution.about.title",
        text: "distribution.about.texts",
        image: {
          alt: "distribution.about.text",
          title: "distribution.about.title",
          src:
            process.env.PUBLIC_URL +
            "/static/images/index/sections/max/atmos.webp",
          min:
            process.env.PUBLIC_URL +
            "/static/images/index/sections/min/atmos.webp",
        },
      },
      tools: {
        title: "distribution.tools.title",
        text: "distribution.tools.texts",
        image: {},
      },
      capabilities: {
        title: "distribution.capabilities.title",
        text: "distribution.capabilities.text",
        list: "distribution.capabilities.list",
        image: {},
      },
    },
  },
};
