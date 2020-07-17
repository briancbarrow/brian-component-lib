<script>
import Vue from "vue";
import { BrianComponentLibSample, FccStartButton } from "@/entry";

export default Vue.extend({
  name: "ServeDev",
  components: {
    BrianComponentLibSample,
    FccStartButton
  }
});
</script>

<template>
  <div id="app">
    <brian-component-lib-sample />
    <FccStartButton />
  </div>
</template>
