import {assets} from "../../../assets";

export const gridConfig = {
  DevOps: {
    color: "var(--redGrayTransparent)",
    items: [
      {
        name: "Docker",
        icon: assets.stack.docker,
      },
      {
        name: "Ansible",
        icon: assets.stack.ansible,
      },
      {
        name: "Jenkins",
        icon: assets.stack.jenkins,
      },
      {
        name: "GitlabCI",
        icon: assets.stack.gitlab,
      },
      {
        name: "TravisCI",
        icon: assets.stack.travis,
      },
      {
        name: "CircleCI",
        icon: assets.stack.circleci_dark,
        icon_light: assets.stack.circleci_light,
      },
      {
        name: "ELK",
        icon: assets.stack.elastic,
      },
      {
        name: "Sentry",
        icon: assets.stack.sentry_dark,
        icon_light: assets.stack.sentry_light,
      },
      {
        name: "Grafana",
        icon: assets.stack.grafana,
      },
      {
        name: "Prometheus",
        icon: assets.stack.prometheus,
      },
      {
        name: "Nginx",
        icon: assets.stack.nginx,
      },
      {
        name: "Bamboo",
        icon: assets.stack.bamboo,
      },
      {
        name: "CloudFormation",
        icon: assets.stack.cloudformation,
      },
      {
        name: "CloudWatch",
        icon: assets.stack.cloudwatch,
      },
    ],
  },
  QA: {
    color: "var(--blueGrayTransparent)",
    items: [
      {
        name: "Appium",
        icon: assets.stack.appium,
      },
      {
        name: "Cucumber",
        icon: assets.stack.cucumber,
      },
      {
        name: "Selenium",
        icon: assets.stack.selenium,
      },
      {
        name: "PyTest",
        icon: assets.stack.pytest,
      },
      {
        name: "Jest",
        icon: assets.stack.jest,
      },
      {
        name: "Jasmine",
        icon: assets.stack.jasmine,
      },
    ],
  },
  Mobile: {
    color: "var(--orangeGrayTransparent)",
    items: [
      {
        name: "Android",
        icon: assets.stack.android,
      },
      {
        name: "Kotlin",
        icon: assets.stack.kotlin,
      },
      {
        name: "Java",
        icon: assets.stack.java,
      },
      {
        name: "iOS",
        icon: assets.stack.apple_dark,
        icon_light: assets.stack.apple_light,
      },
      {
        name: "Swift",
        icon: assets.stack.swift,
      },
      {
        name: "ObjectiveC",
        icon: assets.stack.objc,
      },
    ],
  },
  Storages: {
    color: "var(--redGrayTransparent)",
    items: [
      {
        name: "PostgreSQL",
        icon: assets.stack.postgresql,
      },
      {
        name: "MongoDB",
        icon: assets.stack.mongo,
      },
      {
        name: "ClickHouse",
        icon: assets.stack.clickhouse,
      },
      {
        name: "Redis",
        icon: assets.stack.redis,
      },
      {
        name: "InfluxDB",
        icon: assets.stack.influx,
      },
    ],
  },
  "Data Alanysis": {
    color: "var(--turquoiseGrayTransparent)",
    items: [
      {
        name: "Pandas",
        icon: assets.stack.pandas,
      },
      {
        name: "R Lang",
        icon: assets.stack.rlang,
      },
      {
        name: "Jupyter Notebook",
        icon: assets.stack.jupyter,
      },
      {
        name: "Airflow",
        icon: assets.stack.airflow,
      },
      {
        name: "Luigi",
        icon: assets.stack.luigi,
      },
    ],
  },
  "GIS Tools": {
    color: "var(--orangeGrayTransparent)",
    items: [
      {
        name: "QGIS",
        icon: assets.stack.qgis,
      },
      {
        name: "ArcMap",
        icon: assets.stack.arcmap,
      },
      {
        name: "GeoServer",
        icon: assets.stack.geoserver,
      },
      {
        name: "GRASS",
        icon: assets.stack.grass_gis,
      },
      {
        name: "GeoPandas",
        icon: assets.stack.geopandas,
      },
      {
        name: "Leaflet",
        icon: assets.stack.leaflet,
      },
      {
        name: "OpenLayers",
        icon: assets.stack.openlayers,
      },
      {
        name: "MapBox",
        icon: assets.stack.mapbox,
      },
    ],
  },
  Backend: {
    color: "var(--violetGrayTransparent)",
    items: [
      {
        name: "Python",
        icon: assets.stack.python,
      },
      {
        name: "NodeJS",
        icon: assets.stack.node,
      },
      {
        name: "C#",
        icon: assets.stack.csharp,
      },
      {
        name: "PHP",
        icon: assets.stack.php,
      },
      {
        name: "Firebase",
        icon: assets.stack.firebase,
      },
      {
        name: "Rabbit",
        icon: assets.stack.rabbitmq,
      },
      {
        name: "Kafka",
        icon: assets.stack.kafka,
      },
    ],
  },
  Frontend: {
    color: "var(--greenGrayTransparent)",
    items: [
      {
        name: "React",
        icon: assets.stack.react,
      },
      {
        name: "TypeScript",
        icon: assets.stack.ts,
      },
      {
        name: "JavaScript",
        icon: assets.stack.js,
      },
      {
        name: "Matomo",
        icon: assets.stack.matomo,
      },
      {
        name: "React Native",
        icon: assets.stack.react,
      },
      {
        name: "Webpack",
        icon: assets.stack.webpack,
      },
      {
        name: "Babel",
        icon: assets.stack.babel,
      },
      {
        name: "SASS",
        icon: assets.stack.sass,
      },
    ],
  },
  "UI/UX": {
    color: "var(--blueGrayTransparent)",
    items: [
      {
        name: "Figma",
        icon: assets.stack.figma,
      },
      {
        name: "Adobe Suite",
        icon: assets.stack.adobe,
      },
      {
        name: "Sketch",
        icon: assets.stack.sketch,
      },
      {
        name: "InVision",
        icon: assets.stack.invision,
      },
      {
        name: "Principle",
        icon: assets.stack.priciple,
      },
    ],
  },
  PM: {
    color: "var(--purpleGrayTransparent)",
    items: [
      {
        name: "Jira",
        icon: assets.stack.jira,
      },
      {
        name: "Slack",
        icon: assets.stack.slack,
      },
      {
        name: "Notion",
        icon: assets.stack.notion_dark,
        icon_light: assets.stack.notion_light,
      },
    ],
  },
  Infrastracture: {
    color: "var(--brownGrayTransparent)",
    items: [
      {
        name: "AWS",
        icon: assets.stack.aws,
      },
      {
        name: "GCP",
        icon: assets.stack.gcp,
      },
      {
        name: "Azure",
        icon: assets.stack.azure,
      },
      {
        name: "CloudFlare",
        icon: assets.stack.cloudflare,
      },
    ],
  },
};
