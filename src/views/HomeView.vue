<script setup>
import HomeCard from '../components/HomeCard.vue'
</script>

<template>
  <div class="p-8">
    <button
      type="button"
      class="text-teal-400 text-2xl font-semibold hover:underline cursor-pointer"
    >
      Плейлисты на любой вкус
    </button>

    <div class="py-1.5"></div>

    <div class="flex items-center">
        <HomeCard image="https://picsum.photos/id/106/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
        <HomeCard image="https://picsum.photos/id/305/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
        <HomeCard class="md:block hidden" image="https://picsum.photos/id/177/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
        <HomeCard class="lg:block hidden" image="https://picsum.photos/id/189/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
        <HomeCard class="xl:block hidden" image="https://picsum.photos/id/179/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
    </div>
  </div>

  <div class="p-8">
    <button
      type="button"
      class="text-teal-400 text-2xl font-semibold hover:underline cursor-pointer"
    >
      Слушают сейчас
    </button>

    <div class="py-1.5"></div>
    
    <div class="flex items-center">
        <HomeCard image="https://picsum.photos/id/14/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
        <HomeCard image="https://picsum.photos/id/18/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
        <HomeCard class="md:block hidden" image="https://picsum.photos/id/29/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
        <HomeCard class="lg:block hidden" image="https://picsum.photos/id/53/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
        <HomeCard class="xl:block hidden" image="https://picsum.photos/id/64/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
    </div>
  </div>

  <div class="p-8">
    <button
      type="button"
      class="text-teal-400 text-2xl font-semibold hover:underline cursor-pointer"
    >
      Новинки
    </button>

    <div class="py-1.5"></div>
    
    <div class="flex items-center">
        <HomeCard image="https://picsum.photos/id/29/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
        <HomeCard image="https://picsum.photos/id/53/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
        <HomeCard class="md:block hidden" image="https://picsum.photos/id/64/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
        <HomeCard class="lg:block hidden" image="https://picsum.photos/id/106/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
        <HomeCard class="xl:block hidden" image="https://picsum.photos/id/305/300/300" title="Название плейлиста" subTitle="Дополнительно"/>
    </div>
  </div>
</template>
