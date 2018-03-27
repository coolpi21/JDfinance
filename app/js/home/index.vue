<template lang="html">
    <div>
        <Heador/>
        <Slider/>
        <Novice/>
        <Borrow/>
        <Money/>
        <Product/>
        <Life/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from '../public/header.vue';
import Footor from '../public/footer.vue';
import Navbar from '../public/navbar.vue';
import Slider from './hslider.vue';
import Novice from './novice.vue';
import Borrow from './borrow.vue';
import Money from './money.vue';
import Product from './product';
import Life from './life';
export default {
  components:{
    Heador,
    Slider,
    Novice,
    Borrow,
    Money,
    Product,
    Life,
    Footor,
    Navbar
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
