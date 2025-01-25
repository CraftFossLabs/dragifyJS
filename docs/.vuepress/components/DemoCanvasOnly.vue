<template src="./demos/DemoCanvasOnly.html"></template>

<script>
import utils from './demos/utils.js';

export default {
  mounted() {
    const editor = dragifyjs.init(utils.dragifyConfigStart);
  },
};
</script>

<style src="./demos/DemoCanvasOnly.css"></style>
