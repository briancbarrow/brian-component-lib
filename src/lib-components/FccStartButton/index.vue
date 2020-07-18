<template>
  <button class="btn-cta">{{ text }}</button>
</template>

<script>
export default {
  name: "FccStartButton", // vue component name
  props: {
    text: {
      type: String,
      default: "Enter Button Text Here"
    }
  },
  data() {}
};
</script>

<style>
.btn-cta {
  background-color: #feac32;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#fecc4c),
    to(#ffac33)
  );
  background-image: linear-gradient(#fecc4c, #ffac33);
  border-width: 3px;
  border-color: #feac32;
  border-style: solid;
  color: #0a0a23;
  display: inline-block;
  margin-bottom: 0;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 18px;
  line-height: 1.42857143;
}

.btn-cta:active:hover,
.btn-cta:focus,
.btn-cta:hover {
  background-color: #fecc4c;
  border-width: 3px;
  border-color: #f1a02a;
  background-image: none;
  color: #0a0a23;
}
</style>