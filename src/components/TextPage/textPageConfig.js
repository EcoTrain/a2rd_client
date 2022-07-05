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
      },
      payload: {
        title: "multiagent.payload.title",
        text: "multiagent.payload.texts",
      },
      capabilities: {
        title: "multiagent.capabilities.title",
        text: "multiagent.capabilities.text",
        list: "multiagent.capabilities.list",
      },
    },
    distribution: {
      about: {
        title: "distribution.about.title",
        text: "distribution.about.texts",
        image: {
          max:
            process.env.PUBLIC_URL +
            "/static/images/index/sections/max/activities.jpeg",
          min:
            process.env.PUBLIC_URL +
            "/static/images/index/sections/min/activities.jpg",
        },
      },
      tools: {
        title: "distribution.tools.title",
        text: "distribution.tools.texts",
      },
      capabilities: {
        title: "distribution.capabilities.title",
        text: "distribution.capabilities.text",
        list: "distribution.capabilities.list",
      },
    },
  },
};
