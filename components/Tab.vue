<template>
  <section class="Tab transition-all">
    <h2 class="relative text-center font-lato text-[21px] leading-[25px] text-[#4A5568] pl-[20px] pr-[20px] max-w-[300px] ml-auto mr-auto mt-[30px] mb-[20px] z-20">{{tab.title}}</h2>
    <div
      v-for="(content,i) in tab.content"
      :key="i"
      class="Tab-Content relative overflow-hidden"
      :class="[i === 1 ? 'bg-[#E6FFFA]': '',  i === 1 ? '!pt-[10px] !pb-[43px]' : '']"
    >
      <Wave color="#E6FFFA" class="scale-x-[-1] rotate-180 ml-[-20px] mr-[-20px] relative z-10 mb-[-43px]" v-if="i === 2" />
      <img  class="relative z-20 ml-auto mr-[30px] mb-[-40px]" :src="content.img" v-if="i === 0" alt="">
      <div class="flex items-end">
        <span class="relative z-20 font-lato text-[130px] leading-[130px] text-[#718096]"
              :class="[i === 1 ? 'ml-[20px]' : '', i === 2 ? 'ml-[40px]' : '']"
        >{{ i+1 }}.</span>
        <p class="relative z-20 font-lato text-[16px] leading-[19px] text-[#718096] ml-[20px] mb-[13px]">{{content.text}}</p>
        <div v-if="i === 0" class="absolute left-[-25px] bottom-[-25px] w-[208px] h-[208px] rounded-[50%] bg-[#F7FAFC] opacity-[0.5]"></div>
        <div v-if="i === 2" class="absolute left-[-55px] top-[-45px] w-[304px] h-[304px] rounded-[50%] bg-[#F7FAFC] opacity-[0.5]"></div>
      </div>
      <img  class="relative z-20 ml-auto mr-[45px] mt-[10px]" :src="content.img" v-if="i === 1" alt="">
      <img  class="relative z-20 ml-auto mr-auto" :class="[i === 2 ? 'mt-[-10px]' : '']" :src="content.img" v-if="i === 2" alt="">
      <Wave color="#E6FFFA" class="ml-[-20px] mr-[-20px] relative z-10" v-if="i === 0" />
    </div>
  </section>
</template>
<script>
export default {
  name: 'Tab',
  props: {
    tab: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<style>
.Tab-Content {
  padding:0 20px;
}
</style>
