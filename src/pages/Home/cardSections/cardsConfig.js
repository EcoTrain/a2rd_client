export const projectsCardsInfo = [
  {
    id: "project_airflow",
    title: "projects.card.airflow.title",
    text: "projects.card.airflow.text",
    note: "projects.card.airflow.note",
    icon:
      process.env.PUBLIC_URL +
      "/static/images/index/projects/airflow_emissions.webp",
    bg: "var(--darkWhite)",
    color: "white",
  },
  {
    id: "project_transport",
    title: "projects.card.transport.title",
    text: "projects.card.transport.text",
    note: "projects.card.transport.note",
    icon:
      process.env.PUBLIC_URL +
      "/static/images/index/projects/transport_system.webp",
    bg: "var(--darkWhite)",
    color: "white",
  },
  {
    id: "project_trends",
    title: "projects.card.trends.title",
    text: "projects.card.trends.text",
    note: "projects.card.trends.note",
    icon: process.env.PUBLIC_URL + "/static/images/index/projects/trends.webp",
    bg: "var(--darkWhite)",
    color: "white",
  },
  {
    id: "project_locomotives",
    title: "projects.card.locomotives.title",
    text: "projects.card.locomotives.text",
    note: "projects.card.locomotives.note",
    icon:
      process.env.PUBLIC_URL + "/static/images/index/projects/locomotives.webp",
    bg: "var(--darkWhite)",
    color: "black",
  },
];

export const startupsCardsInfo = [
  {
    title: "startups.item.wm.title",
    previewText: "startups.item.wm.previewText",
    smallText: "startups.item.wm.smallText",
    text: "startups.item.wm.text",

    bg: "var(--darkWhite)",
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
    title: "startups.item.framework.title",
    previewText: "startups.item.framework.previewText",
    smallText: "startups.item.framework.smallText",
    text: "startups.item.framework.text",
    bg: "var(--lightGray)",
    id: "startup_xwm",
  },
  {
    title: "startups.item.airflows.title",
    previewText: "startups.item.airflows.previewText",
    smallText: "startups.item.airflows.smallText",
    text: "startups.item.airflows.text",

    bg: "var(--darkWhite)",
    id: "startup_atmos",
  },
];

export const publicationsCardsInfo = [
  {
    title: "publications.item.forest",
    year: "2022",
    bg: "var(--lightGray)",
    icon: {
      src: "https://www.scimagojr.com/journal_img.php?id=23916",
      alt: "SCImago Journal & Country Rank",
      link: "https://www.scimagojr.com/journalsearch.php?q=23916&tip=sid&exact=no",
    },
    links: [
      {
        title: "publications.item.forest.link.article",
        link: "https://authors.elsevier.com/a/1f0oOzLNSc7c7",
      },
      {
        title: "publications.item.forest.link.score",
        link: "https://www.scimagojr.com/journalsearch.php?q=23916&tip=sid&exact=no",
      },
    ],
  },
  {
    title: "publications.item.gral",
    year: "2020",
    bg: "var(--lightGray)",
    icon: {
      src: "https://www.scimagojr.com/journal_img.php?id=15838",
      alt: "SCImago Journal & Country Rank",
      link: "https://www.scimagojr.com/journalsearch.php?q=15838&tip=sid&exact=no",
    },
    links: [
      {
        title: "publications.item.gral.link.article",
        link: "https://doi.org/10.3390/atmos11121375",
      },
      {
        title: "publications.item.gral.link.score",
        link: "https://www.scimagojr.com/journalsearch.php?q=15838&tip=sid&exact=no",
      },
    ],
  },
];
