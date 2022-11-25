<script>
export default {
  data() {
    return {
      show: true,
      class_name:'slide-fade-enter-active'
    }
  },
  methods:{
    showAnimation:function (){
      this.show = !this.show;
      console.log("okkkkkkkk")
      setTimeout(function (){},1000)
    }
  }
}
</script>

<template>
	<button @touchstart="showAnimation">Toggle Slide + Fade</button>
  <Transition type="transition" name="slide-fade">
    <p v-if="show">hello</p>
  </Transition>
  <div  :class="class_name"></div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 1s ;
}

.slide-fade-leave-active {
  transition: all 2s ;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>