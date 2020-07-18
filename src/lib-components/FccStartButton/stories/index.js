import Vue from 'vue';
import FccStartButton from '../index.vue';

export default { title: 'Fcc Start Button' };

export const startButton = () => ({
  components: { FccStartButton },
  props: {
    text: {
      default: "Button My Button"
    }
  },
  data: () => ({}),
  template: '<FccStartButton :text="text" />'
});