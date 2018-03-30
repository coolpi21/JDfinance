<template lang="html">
    <div>
        <Heador/>
        <Slider/>  
        <Daily/>
        <In/>
        <Footor/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";
import Slider from "./rslider.vue";
import Daily from "./daily";
import In from "./in";

export default {
  components: {
    Heador,
    Slider,
    Daily,
    In,    
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

