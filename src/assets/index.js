import React from "react";

// functional
import {ReactComponent as DiaryIcon} from "./wellness/functional/diary_logo.svg";
import {ReactComponent as SchedulerIcon} from "./wellness/functional/scheduler_logo.svg";
import {ReactComponent as ChatIcon} from "./wellness/functional/chat_logo.svg";
import {ReactComponent as OfflineIcon} from "./wellness/functional/offline_logo.svg";

// stack
import {ReactComponent as NodeIcon} from "./wellness/stack/nodejs_logo.svg";
import {ReactComponent as ReactIcon} from "./wellness/stack/rn_logo.svg";
import {ReactComponent as MongoIcon} from "./wellness/stack/mongo_logo.svg";
import {ReactComponent as PostgreIcon} from "./wellness/stack/postgresql_logo.svg";
import {ReactComponent as FirebaseIcon} from "./wellness/stack/firebase_logo.svg";

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
      scheduler: SchedulerIcon,
      chat: ChatIcon,
      offline: OfflineIcon,
    },
  },
};
