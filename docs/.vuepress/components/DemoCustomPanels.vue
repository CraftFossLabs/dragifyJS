<template>
  <div>
    <div class="panel__top" id="panel__top3">
      <div class="panel__basic-actions" id="panel__basic-actions3"></div>
    </div>
    <div class="dragify" id="dragify3">
      <h1>Hello World Component!</h1>
    </div>
    <div id="blocks3"></div>
  </div>
</template>

<script>
import utils from './demos/utils.js';

export default {
  mounted() {
    const editor3 = dragifyjs.init(utils.dragifyConfigPanels);
    editor3.Panels.addPanel(
      Object.assign({}, utils.panelTop, {
        el: '#panel__top3',
      }),
    );
    editor3.Panels.addPanel(
      Object.assign({}, utils.panelBasicActions, {
        el: '#panel__basic-actions3',
      }),
    );
    window.editor3 = editor3;
  },
};
</script>

<style>
.panel__top {
  padding: 0;
  width: 100%;
  display: flex;
  position: initial;
  justify-content: center;
  justify-content: space-between;
}
.panel__basic-actions {
  position: initial;
}
.content pre {
  padding-top: 0;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
}
</style>
