<template lang="html">
    <div>
        <Heador/>
        <Slider/>
    </div>
</template>

<script>
import Heador from '../public/header.vue';
import Slider from './hslider.vue';
export default {
  components:{
    Heador,
    Slider,
  }
}
</script>

<style lang="scss">
  @import '../../css/reset.scss';
  .home{
    color: red;
    font-size: 80px;
  }
</style>
