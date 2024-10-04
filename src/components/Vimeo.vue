<template>
  <div class="untree_co-section">
    <div class="container">
      <h2 class="heading  text-primary text-center">A platform for place managers to access location data</h2>
      <span class="text-primary">Watch how Propedia works below</span>
      <div class="video-container">
        <iframe width="640" height="360" :src="vimeoUrl" frameborder="0" allow="autoplay;" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vimeoUrl: 'https://player.vimeo.com/video/988747292',
    };
  },
};
</script>

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
