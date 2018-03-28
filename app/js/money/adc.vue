<template>
  <Panel :class="$style.panel" title="京东智投">
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120" alt="">
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel";
export default {
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  > h4 {
    display: none;
  }
  margin-bottom: 0;
  .content {
    height: 102px;
    img {
      width: 100%;
      height: 102px;
      display: block;
    }
  }
}
</style>
