<template lang="html">
    <div>
        <Heador/>
        <Slider/>  
        <Ada/>   
        <Money/>  
        <Adb/> 
        <Finance/>
        <Adc/> 
        <Footor cname="mfooter"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue";
import Footor from "../public/footer.vue";
import Navbar from "../public/navbar.vue";
import Slider from "./mslider.vue";
import Ada from "./ada";
import Money from "./money";
import Adb from "./adb";
import Finance from "./finance";
import Adc from "./adc";
export default {
  components: {
    Heador,
    Slider,
    Ada,
    Money,
    Adb,
    Finance,
    Adc,
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

<style lang="scss">
.mfooter{
  margin-top: 0;
  ul{
    li:first-child{
      display: none;
    }
  }
}
</style>