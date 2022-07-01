import MyButton from "./Mybutton";
import JSXButton from "./JSXButton.tsx";
import SFCButton from "./SFCButton.vue";

import { App } from "vue";
export { MyButton };

export default {
  install(app: App) {
    app.component(MyButton.name, MyButton);
  },
};
