<template>
  <div>
    <div class="dragify" id="dragify2">
      <h1>Hello World Component!</h1>
    </div>
    <div id="blocks2"></div>
  </div>
</template>

<script>
import utils from './demos/utils.js';

export default {
  mounted() {
    window.editor2 = dragifyjs.init(utils.dragifyConfigBlocks);
  },
};
</script>

<style>
.dragify {
  border: 3px solid #444;
  box-sizing: border-box;
}
.dragify-block {
  width: auto;
  height: auto;
  min-height: auto;
}
</style>
