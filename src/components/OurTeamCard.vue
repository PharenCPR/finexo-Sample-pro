<template>
  <div class="box">
    <div class="img-box">
      <img :src="imgPath" class="img1" alt="" />
    </div>
    <div class="detail-box">
      <h5>
        {{ props.staff.name }}
      </h5>
      <p>
        {{ props.staff.position }}
      </p>
      <div>
        <slot name="quote"></slot>
      </div>
    </div>
    <div class="social_box">
      <a href="#">
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>
      <a href="#">
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>
      <a href="#">
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>
      <a href="#">
        <i class="fa fa-instagram" aria-hidden="true"></i>
      </a>
      <a href="#">
        <i class="fa fa-youtube-play" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>
<script setup>
import { defineProps, onMounted } from "vue";
const props = defineProps({
  staff: {
    name: String,
    position: String,
  },
});
onMounted(() => {
  console.log("hello");
});
// export default {
//   props: ["imgPath", "name", "position"],
// };
</script>
