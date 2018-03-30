<template>
  <Panel :class="$style.panel" title="每日签到">
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
      <p>不抢白不抢</p>
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
  .content {
    @include flex(row);
    padding-bottom: 40px;
    position: relative;
    img {
      width: 320px;
      height: 136px;
    }
    p {
      position: absolute;
      top: -112px;
      right: 20px;
      font-size: 28px;
      color: #999;
      height: 112px;
      line-height: 112px;
    }
  }
}
</style>
