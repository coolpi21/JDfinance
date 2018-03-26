<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Novice/>
        <Borrow/>
    </div>
</template>

<script>
import Heador from '../public/header.vue';
import Slider from './hslider.vue';
import Novice from './novice.vue';
import Borrow from './borrow.vue';
export default {
  components:{
    Heador,
    Slider,
    Novice,
    Borrow,
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
