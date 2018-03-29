<template>
  <Panel :class="$style.panel" title="轮播图">
    <section :class="$style.content">
      <Slider :items="items" :cname="$style.slider"></Slider>
    </section>
  </Panel>
</template>

<script>
import Panel from '../core/panel';
import Slider from '../core/slider';
export default {
  components: {
    Panel,
    Slider
  },
  data(){
    return {
      items: [{
        href: 'ious',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320'
      },
      {
        href: 'ious',
        src: '//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320'
      },
      ]
    }
  }

}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  >h4 {
    display: none;
  }
  .content{
    .slider {
       margin-top: 120px;
    }
  }
}

</style>
