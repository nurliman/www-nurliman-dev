import { UidPlugin } from "vue-uid";

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.use(UidPlugin);
});
