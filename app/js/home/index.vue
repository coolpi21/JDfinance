<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Novice/>
        <Borrow/>
        <Money/>
    </div>
</template>

<script>
import Heador from '../public/header.vue';
import Slider from './hslider.vue';
import Novice from './novice.vue';
import Borrow from './borrow.vue';
import Money from './money.vue';
export default {
  components:{
    Heador,
    Slider,
    Novice,
    Borrow,
    Money,
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
