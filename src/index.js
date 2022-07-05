import DynamicHeroicon from './components/DynamicHeroicon.vue';

export default {
  install: (app, options) => {
    app.component('DynamicHeroicon', DynamicHeroicon);
  },
}