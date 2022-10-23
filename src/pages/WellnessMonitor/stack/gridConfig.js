import {assets} from "../../../assets";

export const gridConfig = {
  DevOps: {
    color: "var(--redGrayTransparent)",
    items: [
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
        name: "Prometheus",
        icon: assets.stack.prometheus,
      },
      {
        name: "Nginx",
        icon: assets.stack.nginx,
      },
    ],
  },
  QA: {
    color: "var(--blueGrayTransparent)",
    items: [
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
    ],
  },
  Platform: {
    color: "var(--orangeGrayTransparent)",
    items: [
      {
        name: "Android",
        icon: assets.stack.android,
      },
      {
        name: "iOS",
        icon: assets.stack.apple_dark,
        icon_light: assets.stack.apple_light,
      },
      {
        name: "Web",
        icon: assets.stack.web,
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
        name: "Redis",
        icon: assets.stack.redis,
      },
    ],
  },
  Backend: {
    color: "var(--violetGrayTransparent)",
    items: [
      {
        name: "NodeJS",
        icon: assets.stack.node,
      },
      {
        name: "Firebase",
        icon: assets.stack.firebase,
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
        name: "React Native",
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
    ],
  },
};
