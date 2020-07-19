<script>
import Vue from "vue";
import { BrianComponentLibSample, FccButton } from "@/entry";

export default Vue.extend({
  name: "ServeDev",
  components: {
    BrianComponentLibSample,
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
