<template>
  <section class="Content">
    <section
      class="Content-Tab transition-all flex align-center ml-[20px] mt-[50px]"
      ref="content"
      :class="activeClass"
    >
      <a href="#" @click.prevent="activeTab = 'tab1'"
         :class="[activeTab === 'tab1' ? 'bg-[#81E6D9] !text-[#fff]': '']"
         class="rounded-[12px] rounded-tr-none rounded-br-none border border-[#CBD5E0] font-lato text-[14px] leading-[17px] w-[calc(50vw-20px)] pt-[12px] pb-[12px] text-center flex-shrink-0 text-[#319795]">Arbeitnehmer</a>
      <a href="#" @click.prevent="activeTab = 'tab2'"
         :class="[activeTab === 'tab2' ? 'bg-[#81E6D9] !text-[#fff]': '']"
         class="rounded-[12px] rounded-r-none rounded-l-none border border-[#CBD5E0] font-lato text-[14px] leading-[17px] w-[calc(50vw-20px)] pt-[12px] pb-[12px] text-center flex-shrink-0 text-[#319795]">Arbeitgeber</a>
      <a href="#" @click.prevent="activeTab = 'tab3'"
         :class="[activeTab === 'tab3' ? 'bg-[#81E6D9] !text-[#fff]': '']"
         class="rounded-[12px] rounded-tl-none rounded-bl-none border border-[#CBD5E0] font-lato text-[14px] leading-[17px] w-[calc(50vw-20px)] pt-[12px] pb-[12px] text-center flex-shrink-0 text-[#319795]">Temporärbüro</a>
    </section>
    <transition-group name="fade">
      <Tab :tab="tab1" v-if="activeTab === 'tab1'" key="tab1" />
      <Tab :tab="tab2" v-if="activeTab === 'tab2'" key="tab2" />
      <Tab :tab="tab3" v-if="activeTab === 'tab3'" key="tab3" />
    </transition-group>
  </section>
</template>
<script>
export default {
  name: 'Content',
  data(){
    return {
      tabs: ['tab1', 'tab2', 'tab3'],
      activeTab:'tab1',
      tab1: {
        title: 'Drei einfache Schritte zu deinem neuen Job',
        content: [
          {
            text: 'Erstellen dein Lebenslauf',
            img: '/img/img1.svg',
            img_margin:''
          },
          {
            text: 'Erstellen dein Lebenslauf',
            img: '/img/img2.svg',
            img_margin:''
          },
          {
            text: 'Mit nur einem Klick bewerben',
            img: '/img/img3.svg',
            img_margin:''
          },
        ]
      },
      tab2: {
        title: 'Drei einfache Schritte zu deinem neuen Mitarbeiter',
        content: [
          {
            text: 'Erstellen dein Unternehmensprofil',
            img: '/img/img1.svg',
            img_margin:''
          },
          {
            text: 'Erstellen ein Jobinserat',
            img: '/img/img4.svg',
            img_margin:''
          },
          {
            text: 'Wähle deinen neuen Mitarbeiter aus',
            img: '/img/img5.svg',
            img_margin:''
          },
        ]
      },
      tab3: {
        title: 'Drei einfache Schritte zu deinem neuen Mitarbeiter',
        content: [
          {
            text: 'Erstellen dein Unternehmensprofil',
            img: '/img/img1.svg',
            img_margin:''
          },
          {
            text: 'Erhalte Vermittlungs- angebot von Arbeitgeber',
            img: '/img/img6.svg',
            img_margin:''
          },
          {
            text: 'Vermittlung nach Provision oder Stundenlohn',
            img: '/img/img7.svg',
            img_margin:''
          },
        ]
      }
    }
  },
  computed:{
    activeClass(){
      let _class = ''
      if(this.activeTab === 'tab2'){
        _class = 'ml-[-20vw]'
      }
      if(this.activeTab === 'tab3'){
        _class = 'ml-[-40vw]'
      }
      return _class
    }
  }
}
</script>
<style>
.Content {
  min-height: 900px;
}
</style>
