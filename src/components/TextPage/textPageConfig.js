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
    analytic: {
      title: "analytics.title",
      text: "analytics.text",
      sectionTheme: "section-darkWhite",
    },
    solutions: {
      title: "solutions.title",
      text: "solutions.text",
      sectionTheme: "section-darkWhite",
    },
    medAssistant: {
      title: "assistant.title",
      text: "assistant.text",
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
        sectionTheme: "section-white",
        image: {
          max:
            process.env.PUBLIC_URL +
            "/static/images/index/sections/max/activities.jpeg",
          min:
            process.env.PUBLIC_URL +
            "/static/images/index/sections/min/activities.jpg",
        },
      },
      analysis: {
        title: "multiagent.analysis.title",
        text: "multiagent.analysis.texts",
        sectionTheme: "section-white",
      },
      payload: {
        title: "multiagent.payload.title",
        text: "multiagent.payload.texts",
        sectionTheme: "section-white",
      },
      targets: {
        title: "multiagent.targets.title",
        text: "multiagent.targets.text",
        list: "multiagent.targets.list",
      },
    },
  },
};
