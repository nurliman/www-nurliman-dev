import type { App } from "vue";
import { Uid } from "vue-uid";

export default (app: App) => {
  app.directive("uid", Uid);
};
