/* Example config: {
  title: i18n key,
  text:  i18n key,
  list:  i18n key with list,
  sectionTheme:  css class (section.css: section-*),
  // If image NOT exist = FullScreen text section
  // If image exist = split section & safe img area
  image: {
    max: str filepath,
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
        max:
          process.env.PUBLIC_URL +
          "/static/images/index/sections/max/activities.jpeg",
        min:
          process.env.PUBLIC_URL +
          "/static/images/index/sections/min/activities.jpg",
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
        max:
          process.env.PUBLIC_URL +
          "/static/images/index/sections/max/businessDeal.jpeg",
        min:
          process.env.PUBLIC_URL +
          "/static/images/index/sections/min/businessDeal.jpeg",
      },
    },
  },
  modeling: {
    multiagent: {
      about: {
        title: "multiagent.about.title",
        text: "multiagent.about.texts",
        image: {
          max:
            process.env.PUBLIC_URL +
            "/static/images/index/sections/max/traffic.jpg",
          min:
            process.env.PUBLIC_URL +
            "/static/images/index/sections/min/traffic.jpg",
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
          max:
            process.env.PUBLIC_URL +
            "/static/images/index/sections/max/atmosMax.png",
          min:
            process.env.PUBLIC_URL +
            "/static/images/index/sections/min/atmosMin.png",
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
