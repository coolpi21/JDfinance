<template lang="html">
    <div>
        <Heador/>
        <Slider/>  
        <Finance/>
        <Activity/>
        <Service/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";
import Slider from "./islider.vue";
import Finance from './finance.vue';
import Service from './service.vue';
import Activity from './activity.vue';
export default {
  components: {
    Heador,
    Slider,
    Finance,
    Activity,
    Service,
    Footor,
    Navbar
  }
};
</script>

<style lang="scss">
@import "../../css/reset.scss";
.home {
  color: red;
  font-size: 80px;
}
</style>

