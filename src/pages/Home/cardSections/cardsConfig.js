export const projectsCardsInfo = [
  {
    id: "project_airflow",
    title: "card.airflow.title",
    text: "card.airflow.text",
    note: "card.airflow.note",
    image:
      process.env.PUBLIC_URL +
      "/static/images/index/projects/preview/airflow_emissions.jpg",
    multiagent: true,
    distribution: true,
  },
  {
    id: "project_transport",
    title: "card.transport.title",
    text: "card.transport.text",
    note: "card.transport.note",
    image:
      process.env.PUBLIC_URL +
      "/static/images/index/projects/preview/transport_system.jpg",
    multiagent: true,
    distribution: true,
  },
  {
    id: "project_trends",
    title: "card.trends.title",
    text: "card.trends.text",
    note: "card.trends.note",
    image:
      process.env.PUBLIC_URL +
      "/static/images/index/projects/preview/trends.jpg",
  },
  {
    id: "project_locomotives",
    title: "card.locomotives.title",
    text: "card.locomotives.text",
    note: "card.locomotives.note",
    image:
      process.env.PUBLIC_URL +
      "/static/images/index/projects/preview/locomotives.jpg",
    multiagent: true,
  },
];

export const startupsCardsInfo = [
  {
    title: "item.wm.title",
    previewText: "item.wm.previewText",
    smallText: "item.wm.smallText",
    text: "item.wm.text",
    bg: "var(--darkWhite)",
    id: "startup_wm",
    links: [
      {
        title: "links.manual",
        link: "https://ecotrain.github.io/WM_doc/",
      },
      {
        title: "links.website",
        link: "https://wellness.a2rd.com/",
      },
    ],
  },
  {
    title: "item.framework.title",
    previewText: "item.framework.previewText",
    smallText: "item.framework.smallText",
    text: "item.framework.text",
    bg: "var(--lightGray)",
    id: "startup_xwm",
  },
  {
    title: "item.airflows.title",
    previewText: "item.airflows.previewText",
    smallText: "item.airflows.smallText",
    text: "item.airflows.text",
    bg: "var(--darkWhite)",
    id: "startup_atmos",
    links: [
      {
        title: "links.website",
        link: "http://80.65.20.243:61726",
      },
    ],
  },
];

export const publicationsCardsInfo = [
  {
    title: "item.forest",
    journal: "Environmental Pollution",
    icon: {
      src: "https://www.scimagojr.com/journal_img.php?id=23916",
      alt: "SCImago Journal & Country Rank",
      link: "https://www.scimagojr.com/journalsearch.php?q=23916&tip=sid&exact=no",
    },
    links: [
      {
        title: "links.article",
        link: "https://doi.org/10.1016/j.envpol.2022.119324",
      },
      {
        title: "links.score",
        link: "https://www.scimagojr.com/journalsearch.php?q=23916&tip=sid&exact=no",
      },
    ],
  },
  {
    title: "item.gral",
    journal: "Atmosphere",
    icon: {
      src: "https://www.scimagojr.com/journal_img.php?id=15838",
      alt: "SCImago Journal & Country Rank",
      link: "https://www.scimagojr.com/journalsearch.php?q=15838&tip=sid&exact=no",
    },
    links: [
      {
        title: "links.article",
        link: "https://doi.org/10.3390/atmos11121375",
      },
      {
        title: "links.score",
        link: "https://www.scimagojr.com/journalsearch.php?q=15838&tip=sid&exact=no",
      },
    ],
  },
  {
    title: "item.electricity_transition",
    links: [
      {
        title: "links.article",
        link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4085199",
      },
    ],
  },
];
