export const projectsCardsInfo = [
  {
    id: "project_airflow",
    title: "Airflow and tracking pollutant emissions modelling",
    text: "Computational modelling for pollutant tracking in complex urban terrains, evaluating the contributions of sources. Our models precisely count the influence of meteorological factors and landscape; we work with 40 by 40 km domains and have a positive experience with modelling up to 3 km above the ground",
    note: "(air quality)",
    icon:
      process.env.PUBLIC_URL +
      "/static/images/index/projects/airflow_emissions.webp",
    bg: "var(--darkWhite)",
    color: "white",
  },
  {
    id: "project_transport",
    title: "Transport systems modelling",
    text: "Railway complexes and autonomous transport simulation modelling for the quarries and port infrastructure. Through computational modelling, we provide an audit and selection of optimal solutions for the modernization of the road infrastructure of quarries in order to reduce negative environmental and economic costs.",
    note: "",
    icon:
      process.env.PUBLIC_URL +
      "/static/images/index/projects/transport_system.webp",
    bg: "var(--darkWhite)",
    color: "white",
  },
  {
    id: "project_trends",
    title: "Trends analysis",
    text: "Review of modern trends and promising projects focused on global sustainable development challenges. We prepare analytics based on preliminary and thematic processing of satellite data, industrial databases, corporate reports, scientific publications, and targeted computational modelling for consumers.",
    note: "",
    icon: process.env.PUBLIC_URL + "/static/images/index/projects/trends.webp",
    bg: "var(--darkWhite)",
    color: "black",
  },
  {
    id: "project_locomotives",
    title: "Energy transition modelling",
    text: "Comparative modelling of the transfer of open-pit mine diesel locomotives to all-electric traction based on lithium batteries.",
    note: "(zero on-site emissions; especially relevant for the markets of Asia and Oceania)",
    icon:
      process.env.PUBLIC_URL + "/static/images/index/projects/locomotives.webp",
    bg: "var(--darkWhite)",
    color: "black",
  },
];

export const startupsCardsInfo = [
  {
    title: "Wellness Monitor",
    previewText: "Intelligent assistant to support the quality of life",
    smallText:
      "Intelligent assistant to support the quality of life, which allows for tracking the status of key health indicators and therapeutic protocols and support for people with special needs. ",
    texts: [
      "Wellness Monitor – intelligent assistant to support the quality of life, which allows for tracking the status of key health indicators and therapeutic protocols and support for people with special needs.", 
      "The assistant is designed to support and accompany users and maintain communication with doctors, medical services, insurance, and other companies. You just need to register to use the assistant, which takes less than a minute. This assistant helps you monitor your health indicators, plan your treatment, nutrition, and medication program, and communicate with other users.", 
      "Wellness Monitor is a part of the x-Health&Wellness framework – an interface for interaction with the medical sector (hospitals), insurance companies, airlines, and travel services. Our goal is to develop and maintain Wellness Monitor as a convenient intelligent assistant that provides a safe, fast, and reliable service of equal opportunities for all categories of users.",
    ],
    bg: "var(--lightBlue)",
    id: "startup_wm",
    links: [
      {
        title: "User Manual",
        link: "https://ecotrain.github.io/wellness_doc/",
      },
      {
        title: "Website",
        link: "https://wellness.a2rd.com/",
      },
    ],
  },
  {
    title: "x-Health&Wellness framework",
    previewText: "An ecosystem that brings together various services",
    smallText:
      "An ecosystem that brings together various services to make the life of users as productive as possible, freeing up time from worries for constant monitoring of health indicators and medical services",
    texts: [
      "The x-Health&Wellness framework is a specially developed ecosystem that combines various services (medicine, insurance, banks, tourism, air travel, restaurants) to make the users’ life most productive, freeing up time from worries for constant monitoring of health parameters and medical therapy.",
      "The x-Health&Wellness framework provides constant communication with the supervising doctor and the medical centre, allows you to safely travel to new countries, be confident in medical control and personalized support from medical services, restaurant services, and many others. User data is securely stored in the registry in encrypted form and is only accessible through authorized access to personalize therapy or diet and in the event of a sudden emergency.",
    ],
      bg: "var(--lightGreen)",
    id: "startup_xwm",
  },
  {
    title: "Urban airflows modeling",
    previewText:
      "Modeling of air flows and estimation of pollutant concentrations",
    smallText:
      "Modeling of surface air flows and estimation of pollutant concentrations based on Lagrangian mathematics",
    texts: [
      "Surface airflows modeling and pollutant concentrations estimation are very complex processes requiring the development of unique mathematical models that consider regional features and many other factors. We use the best approaches to model and evaluate the negative impact of pollutants on the environment and public health by tracking them from the source to a specific point in space.", 
      "The core of our solution is Lagrangian mathematics; technical solutions are implemented based on Python, C++, PostgreSQL, QGIS. We are ready to implement our solutions in the information environment of your company.",
    ],
      bg: "var(--lightOrange)",
    id: "startup_atmos",
  },
];

export const publicationsCardsInfo = [
  {
    title:
      "Catastrophic Pm2.5 emissions from Siberian Forest Fires: Impacting Factors Analysis",
    year: "2022",
    bg: "var(--lightGray)",
    icon: {
      src: "https://www.scimagojr.com/journal_img.php?id=23916",
      alt: "SCImago Journal & Country Rank",
      link: "https://www.scimagojr.com/journalsearch.php?q=23916&tip=sid&exact=no",
    },
    links: [
      {
        title: "Article",
        link: "https://authors.elsevier.com/a/1f0oOzLNSc7c7",
      },
      {
        title: "Score",
        link: "https://www.scimagojr.com/journalsearch.php?q=23916&tip=sid&exact=no",
      },
    ],
  },
  {
    title:
      "Graz Lagrangian Model (GRAL) for Pollutants Tracking and Estimating Sources Partial Contributions to Atmospheric Pollution in Highly Urbanized Areas",
    year: "2020",
    bg: "var(--lightGray)",
    icon: {
      src: "https://www.scimagojr.com/journal_img.php?id=15838",
      alt: "SCImago Journal & Country Rank",
      link: "https://www.scimagojr.com/journalsearch.php?q=15838&tip=sid&exact=no",
    },
    links: [
      {
        title: "Article",
        link: "https://doi.org/10.3390/atmos11121375",
      },
      {
        title: "Score",
        link: "https://www.scimagojr.com/journalsearch.php?q=15838&tip=sid&exact=no",
      },
    ],
  },
];
