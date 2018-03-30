<template>
  <Panel :class="$style.panel" title="轮播图">
    <section :class="$style.content">
      <swiper :options="options" :class="$style.slider">
        <swiper-slide :class="$style.item">签到领流量，1元500M！<em> > </em></swiper-slide>
        <swiper-slide :class="$style.item">百万白条券免费送，速来领取！！  <em> > </em></swiper-slide>
        
      </swiper>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    Panel,
    swiper,
    swiperSlide
  },
  data() {
    return {
      options: {
        loop: true,
        autoplay: true,
        direction: "vertical"
      }
    };
  }
};
</script>
<style lang="scss">
.swiper-container-vertical {
  height: 72px;
}
</style>
<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  > h4 {
    display: none;
  }
  .content {
    overflow: hidden;
    margin-top: 120px;
    padding-left: 166px;
    background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left
      top no-repeat;
    height: 72px;
    line-height: 72px;
    .slider {
      font-size: 26px;
      color: #333;
      .item {
        position: relative;
        > em {
          color: #ddd;
          position: absolute;
          right: 20px;
        }
      }
    }
  }
}
</style>
