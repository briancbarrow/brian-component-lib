import FccButton from '../index.vue';
import { withKnobs, text } from '@storybook/addon-knobs'

export default { title: 'Fcc Button', decorators: [withKnobs], component: FccButton };

export const startButton = () => ({
  components: { FccButton },
  props: {
    text: {
      default: text("Button My Button", "Default Knob")
    }
  },
  data: () => ({}),
  template: '<FccButton :text="text" />'
});