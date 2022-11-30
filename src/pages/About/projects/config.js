const projectsCardsInfo = [
  {
    id: "project_airflow",
    title: "card.airflow.title",
    preview: "card.airflow.preview",
    text: "card.airflow.text",
    note: "card.airflow.note",
    image: {
      alt: "card.airflow.text",
      title: "card.airflow.title",
      src:
        process.env.PUBLIC_URL +
        "/static/images/index/projects/max/airflow-emissions.webp",
      min:
        process.env.PUBLIC_URL +
        "/static/images/index/projects/min/airflow-emissions.webp",
    },
    multiagent: true,
    distribution: true,
  },
  {
    id: "project_transport",
    title: "card.transport.title",
    preview: "card.transport.preview",
    text: "card.transport.text",
    note: "card.transport.note",
    image: {
      alt: "card.transport.text",
      title: "card.transport.title",
      src:
        process.env.PUBLIC_URL +
        "/static/images/index/projects/max/transport-system.webp",
      min:
        process.env.PUBLIC_URL +
        "/static/images/index/projects/min/transport-system.webp",
    },
    multiagent: true,
    distribution: true,
  },
  {
    id: "project_trends",
    title: "card.trends.title",
    preview: "card.trends.preview",
    text: "card.trends.text",
    note: "card.trends.note",
    image: {
      alt: "card.transport.text",
      title: "card.transport.title",
      src:
        process.env.PUBLIC_URL +
        "/static/images/index/projects/max/trends.webp",
      min:
        process.env.PUBLIC_URL +
        "/static/images/index/projects/min/trends.webp",
    },
  },
  {
    id: "project_locomotives",
    title: "card.locomotives.title",
    preview: "card.locomotives.preview",
    text: "card.locomotives.text",
    note: "card.locomotives.note",
    image: {
      alt: "card.locomotives.text",
      title: "card.locomotives.title",
      src:
        process.env.PUBLIC_URL +
        "/static/images/index/projects/max/locomotives.webp",
      min:
        process.env.PUBLIC_URL +
        "/static/images/index/projects/min/locomotives.webp",
    },
    multiagent: true,
  },
];

export default projectsCardsInfo;
