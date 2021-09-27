<template>
  <section class="pb-[150px]">
    <Header />
    <Intro />
    <Content />
    <Registration />
  </section>
</template>

<script>
export default {}
</script>
<style>
body {
  overflow-x: hidden;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

</style>
