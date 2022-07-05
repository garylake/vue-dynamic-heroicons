<template>
    <component :class="finalIconClasses" :is="icon" />
</template>

<script>
import * as solid from '@heroicons/vue/solid';
import * as outline from '@heroicons/vue/outline';

export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    outline: {
      type: Boolean,
      required: false,
      default: false,
    },
    iconOverrideClasses: {
      type: String,
      required: false,
    },
    size: {
      type: Number,
      required: false,
    }
  },
  computed: {
    icons() {
      return { solid, outline };
    },
    icon() {
      return this.icons[this.outline ? 'outline' : 'solid'][this.buildIconComponentName(this.name)];
    },
    finalIconClasses() {
      let finalClasses = this.iconOverrideClasses ? this.buildIconOverrideClasses() : {};
      // default and/or min button size is 4
      const size = this.size && this.size >= 3 ? this.size : 4;
      finalClasses['h-' + size.toString()] = true;
      finalClasses['w-' + size.toString()] = true;
      return finalClasses;
    },
  },
  methods: {
    buildIconComponentName(iconName) {
      return iconName.replace(/(^\w|-\w)/g, clearAndUpper) + 'Icon';

      function clearAndUpper(text) {
        return text.replace(/-/, "").toUpperCase();
      }
    },
    buildIconOverrideClasses() {
      if(this.iconOverrideClasses) {
        return { [this.iconOverrideClasses]: true };
      }
      return false;
    },
  },
};
</script>
