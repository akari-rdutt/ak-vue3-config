// entry.js
import HelloWorld from '../custominterfaces/helloworld/HelloWorld.vue';

export default function registerGlobalComponents(app) {
  // Register global components
  app.component('HelloWorld', HelloWorld);
}
