import React from "react";

// functional
import {ReactComponent as DiaryIcon} from "./wellness/functional/diary.svg";
import {ReactComponent as MedicineIcon} from "./wellness/functional/medicine.svg";
import {ReactComponent as SchedulerIcon} from "./wellness/functional/calendar.svg";
import {ReactComponent as ChatIcon} from "./wellness/functional/chat.svg";
import {ReactComponent as OfflineIcon} from "./wellness/functional/offline.svg";

// Stack
import {ReactComponent as AdobeIcon} from "./stack/adobe.svg";
import {ReactComponent as AppiumIcon} from "./stack/appium.svg";
import {ReactComponent as AirflowIcon} from "./stack/airflow.svg";
import {ReactComponent as ArcmapIcon} from "./stack/arcmap.svg";
import {ReactComponent as AndroidIcon} from "./stack/android.svg";
import {ReactComponent as AnsibleIcon} from "./stack/ansible.svg";
import {ReactComponent as AppleLightIcon} from "./stack/apple_light.svg";
import {ReactComponent as AppleDarkIcon} from "./stack/apple_dark.svg";
import {ReactComponent as AwsIcon} from "./stack/aws.svg";
import {ReactComponent as AzureIcon} from "./stack/azure.svg";
import {ReactComponent as BabelIcon} from "./stack/babel.svg";
import {ReactComponent as BambooIcon} from "./stack/bamboo.svg";
import {ReactComponent as CircleCiLightIcon} from "./stack/circle-ci_light.svg";
import {ReactComponent as CircleCiDarkIcon} from "./stack/circle-ci_dark.svg";
import {ReactComponent as CloudWatchIcon} from "./stack/cloud-watch.svg";
import {ReactComponent as CloudFormationIcon} from "./stack/cloudformation.svg";
import {ReactComponent as CloudflareIcon} from "./stack/cloudflare.svg";
import {ReactComponent as ClickhouseIcon} from "./stack/clickhouse.svg";
import {ReactComponent as CucumberIcon} from "./stack/cucumber.svg";
import {ReactComponent as CsharpIcon} from "./stack/csharp.svg";
import {ReactComponent as DockerIcon} from "./stack/docker.svg";
import {ReactComponent as ElasticIcon} from "./stack/elastic.svg";
import {ReactComponent as FigmaIcon} from "./stack/figma.svg";
import {ReactComponent as FirebaseIcon} from "./stack/firebase.svg";
import {ReactComponent as GeoserverIcon} from "./stack/geoserver.svg";
import {ReactComponent as GcpIcon} from "./stack/gcp.svg";
import {ReactComponent as GitlabIcon} from "./stack/gitlab.svg";
import {ReactComponent as GuardrailsIcon} from "./stack/guardrails.svg";
import {ReactComponent as GrassGisIcon} from "./stack/grass_gis.svg";
import {ReactComponent as GrafanaIcon} from "./stack/grafana.svg";
import {ReactComponent as GeoPandasIcon} from "./stack/geopandas.svg";
import {ReactComponent as InvisionIcon} from "./stack/invision.svg";
import {ReactComponent as InfluxIcon} from "./stack/influx.svg";
import {ReactComponent as JasmineIcon} from "./stack/jasmine.svg";
import {ReactComponent as JavaIcon} from "./stack/java.svg";
import {ReactComponent as JestIcon} from "./stack/jest.svg";
import {ReactComponent as JenkinsIcon} from "./stack/jenkins.svg";
import {ReactComponent as JiraIcon} from "./stack/jira.svg";
import {ReactComponent as JsIcon} from "./stack/js.svg";
import {ReactComponent as JupyterIcon} from "./stack/jupyter.svg";
import {ReactComponent as KafkaIcon} from "./stack/kafka.svg";
import {ReactComponent as KotlinIcon} from "./stack/kotlin.svg";
import {ReactComponent as LuigiIcon} from "./stack/luigi.svg";
import {ReactComponent as LeafletIcon} from "./stack/leaflet.svg";
import {ReactComponent as MatomoIcon} from "./stack/matomo.svg";
import {ReactComponent as MapboxIcon} from "./stack/mapbox.svg";
import {ReactComponent as MongoIcon} from "./stack/mongo.svg";
import {ReactComponent as NodeIcon} from "./stack/node.svg";
import {ReactComponent as NotionLightIcon} from "./stack/notion_light.svg";
import {ReactComponent as NotionDarkIcon} from "./stack/notion_dark.svg";
import {ReactComponent as NginxIcon} from "./stack/nginx.svg";
import {ReactComponent as ObjCIcon} from "./stack/obj-c.svg";
import {ReactComponent as OpenlayersIcon} from "./stack/openlayers.svg";
import {ReactComponent as PandasIcon} from "./stack/pandas.svg";
import {ReactComponent as PostCssIcon} from "./stack/post-css.svg";
import {ReactComponent as PostgreIcon} from "./stack/postgresql.svg";
import {ReactComponent as PrincipleAppIcon} from "./stack/principle-app.svg";
import {ReactComponent as PrometheusIcon} from "./stack/prometheus.svg";
import {ReactComponent as PythonIcon} from "./stack/python.svg";
import {ReactComponent as PytestIcon} from "./stack/pytest.svg";
import {ReactComponent as PhpIcon} from "./stack/php.svg";
import {ReactComponent as QgisIcon} from "./stack/qgis.svg";
import {ReactComponent as RabbitmqIcon} from "./stack/rabbitmq.svg";
import {ReactComponent as ReactIcon} from "./stack/react.svg";
import {ReactComponent as ReactNativeIcon} from "./stack/react.svg";
import {ReactComponent as RedisIcon} from "./stack/redis.svg";
import {ReactComponent as RLangIcon} from "./stack/rlang.svg";
import {ReactComponent as SassIcon} from "./stack/sass.svg";
import {ReactComponent as SeleniumIcon} from "./stack/selenium.svg";
import {ReactComponent as SentryLightIcon} from "./stack/sentry_light.svg";
import {ReactComponent as SentryDarkIcon} from "./stack/sentry_dark.svg";
import {ReactComponent as SketchIcon} from "./stack/sketch.svg";
import {ReactComponent as SlackIcon} from "./stack/slack.svg";
import {ReactComponent as SwiftIcon} from "./stack/swift.svg";
import {ReactComponent as TeacherlyIcon} from "./stack/teacherly.svg";
import {ReactComponent as TravisIcon} from "./stack/travis-ci.svg";
import {ReactComponent as TrelloIcon} from "./stack/trello.svg";
import {ReactComponent as TsIcon} from "./stack/typescript.svg";
import {ReactComponent as WebIcon} from "./stack/web.svg";
import {ReactComponent as WebpackIcon} from "./stack/webpack.svg";

// Customers
import {ReactComponent as EurochemLogo} from "./customers/eurochem.svg";
import {ReactComponent as SuekLogo} from "./customers/suek.svg";
import {ReactComponent as SgkLogo} from "./customers/sgk.svg";

export const assets = {
  wellness: {
    stack: {
      node: NodeIcon,
      react: ReactIcon,
      mongo: MongoIcon,
      postgre: PostgreIcon,
      firebase: FirebaseIcon,
    },
    functional: {
      diary: DiaryIcon,
      medicine: MedicineIcon,
      scheduler: SchedulerIcon,
      chat: ChatIcon,
      offline: OfflineIcon,
    },
  },
  stack: {
    adobe: AdobeIcon,
    appium: AppiumIcon,
    airflow: AirflowIcon,
    arcmap: ArcmapIcon,
    android: AndroidIcon,
    ansible: AnsibleIcon,
    apple_light: AppleLightIcon,
    apple_dark: AppleDarkIcon,
    aws: AwsIcon,
    azure: AzureIcon,
    babel: BabelIcon,
    bamboo: BambooIcon,
    circleci_dark: CircleCiDarkIcon,
    circleci_light: CircleCiLightIcon,
    cloudwatch: CloudWatchIcon,
    cloudformation: CloudFormationIcon,
    cloudflare: CloudflareIcon,
    clickhouse: ClickhouseIcon,
    cucumber: CucumberIcon,
    csharp: CsharpIcon,
    docker: DockerIcon,
    elastic: ElasticIcon,
    figma: FigmaIcon,
    firebase: FirebaseIcon,
    geoserver: GeoserverIcon,
    gcp: GcpIcon,
    gitlab: GitlabIcon,
    guardrails: GuardrailsIcon,
    grass_gis: GrassGisIcon,
    grafana: GrafanaIcon,
    geopandas: GeoPandasIcon,
    invision: InvisionIcon,
    influx: InfluxIcon,
    jasmine: JasmineIcon,
    java: JavaIcon,
    jest: JestIcon,
    jenkins: JenkinsIcon,
    jira: JiraIcon,
    js: JsIcon,
    jupyter:  JupyterIcon,
    kafka: KafkaIcon,
    kotlin: KotlinIcon,
    luigi: LuigiIcon,
    leaflet: LeafletIcon,
    matomo: MatomoIcon,
    mapbox: MapboxIcon,
    mongo: MongoIcon,
    node: NodeIcon,
    notion_light: NotionLightIcon,
    notion_dark: NotionDarkIcon,
    nginx: NginxIcon,
    objc: ObjCIcon,
    openlayers: OpenlayersIcon,
    pandas: PandasIcon,
    postcss: PostCssIcon,
    postgresql: PostgreIcon,
    priciple: PrincipleAppIcon,
    prometheus: PrometheusIcon,
    python: PythonIcon,
    pytest: PytestIcon,
    php: PhpIcon,
    qgis: QgisIcon,
    rabbitmq: RabbitmqIcon,
    react: ReactIcon,
    rn: ReactNativeIcon,
    redis: RedisIcon,
    rlang: RLangIcon,
    sass: SassIcon,
    selenium: SeleniumIcon,
    sentry_light: SentryLightIcon,
    sentry_dark: SentryDarkIcon,
    sketch: SketchIcon,
    slack: SlackIcon,
    swift: SwiftIcon,
    teacherly: TeacherlyIcon,
    travis: TravisIcon,
    trello: TrelloIcon,
    ts: TsIcon,
    web: WebIcon,
    webpack: WebpackIcon,
  },
  customers: {
    suek: SuekLogo,
    sgk: SgkLogo,
    eurochem: EurochemLogo,
  },
};
