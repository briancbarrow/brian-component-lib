<script>
import Vue from "vue";
import { FccButton } from "@/entry";

export default Vue.extend({
  name: "ServeDev",
  components: {
    FccButton
  }
});
</script>

<template>
  <div id="app">
    <brian-component-lib-sample />
    <FccButton />
  </div>
</template>
