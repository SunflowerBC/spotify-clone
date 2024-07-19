<script setup>
import SongRow from '../components/SongRow.vue'
import Play from "vue-material-design-icons/Play.vue";
import Pause from "vue-material-design-icons/Pause.vue";
import DotsHorizontal from "vue-material-design-icons/DotsHorizontal.vue";
import Heart from "vue-material-design-icons/Heart.vue";
import ClockTimeThreeOutline from "vue-material-design-icons/ClockTimeThreeOutline.vue";
import artist from "../artist.json";
</script>

<template>
  <div class="p-8">
    <button
      type="button"
      class="text-teal-400 text-2xl font-semibold hover:underline cursor-pointer"
    >
      {{ artist.name }}
    </button>

    <div class="py-1.5"></div>

    <div class="flex items-center w-full relative h-full">
      <img width="140" :src="artist.albumCover" />

      <div class="w-full ml-5">
        <div
          style="font-size: 33px"
          class="text-teal-400 absolute w-full hover:underline cursor-pointer top-0 font-semibold"
        >
          {{ artist.albumName }}
        </div>
        <div class="text-teal-300 text-[13px] flex">
          <div class="flex">Альбом</div>
          <div class="ml-2 flex">
            <div class="circle mt-2 mr-2"></div>
            <span class="-ml-0.5">{{ artist.releaseYear }}</span>
          </div>
          <div class="ml-2 flex">
            <div class="circle mt-2 mr-2"></div>
            <span class="-ml-0.5">{{ artist.tracks.length }} песен</span>
          </div>
        </div>
        <div class="absolute flex gap-4 items-center justify-start bottom-0 mb-1.5">
            <button type="button" class="p-1 rounded-full bg-white">
                <Play v-if="true" fillColor="teal" :size="25"/>
                <Play v-else fillColor="teal" :size="25"/>
            </button>
            <button type="button">
                <Heart fillColor="#DB7093" :size="30"/>
            </button>
            <button type="button">
                <DotsHorizontal fillColor="teal" :size="25"/>
            </button>
        </div>
      </div>
    </div>

    <div class="mt-6"></div>
    <div class="flex items-center justify-between px-5 pt-2">
        <div class="flex items-center justify-between text-teal-600">
            <div class="mr-7">#</div>
            <div class="text-sm">Название</div>
        </div>
        <div>
            <ClockTimeThreeOutline fillColor="teal" :size="18"/>
        </div>
    </div>
    <div class="border-b border-b-teal-200 mt-2"></div>
    <div class="mb-4"></div>
    <ul class="w-full" v-for="track, index in artist.tracks" :key="track">
        <SongRow :artist="artist" :track="track" :index="++index"/>
    </ul>
  </div>
</template>

<style scoped>
.circle {
  width: 4px;
  height: 4px;
  background-color: turquoise;
  border-radius: 100%;
}
</style>
