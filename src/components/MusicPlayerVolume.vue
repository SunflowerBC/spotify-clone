<script setup>
import { ref, onMounted, watch } from 'vue';

import VolumeMute from 'vue-material-design-icons/VolumeMute.vue';
import VolumeHigh from 'vue-material-design-icons/VolumeHigh.vue';

import { useSongStore } from '@/stores/song';
import { storeToRefs } from 'pinia';

const useSong = useSongStore();
const { audio } = storeToRefs(useSong);

let isHover = ref(false);
let vol = ref(80);
let volume = ref(null);
let prevVol = ref(80); // Переменная для хранения предыдущей громкости

// Восстановление громкости из localStorage при загрузке компонента
onMounted(() => {
  const savedVolume = localStorage.getItem('volume');
  if (savedVolume !== null) {
    vol.value = parseInt(savedVolume);
    audio.value.volume = vol.value / 100;
  }

  // Добавляем слушатель для изменения громкости через ползунок
  volume.value.addEventListener('input', (e) => {
    vol.value = Math.round(e.currentTarget.value);
    audio.value.volume = vol.value / 100;
    localStorage.setItem('volume', vol.value); // Сохраняем текущую громкость в localStorage
  });
});

// Слежение за изменением трека
watch(audio, () => {
  const savedVolume = localStorage.getItem('volume');
  if (savedVolume !== null) {
    vol.value = parseInt(savedVolume);
    audio.value.volume = vol.value / 100;
  }
});

function toggleMute() {
  if (vol.value === 0) {
    vol.value = prevVol.value;
    audio.value.volume = prevVol.value / 100;
  } else {
    prevVol.value = vol.value;
    vol.value = 0;
    audio.value.volume = 0;
  }
  localStorage.setItem('volume', vol.value); // Сохраняем текущую громкость в localStorage
}
</script>

<template>
  <div>
    <VolumeMute v-if="vol == 0" fillColor="#FFFFFF" :size="20" @click="toggleMute"/>
    <VolumeHigh v-else fillColor="#FFFFFF" :size="20" @click="toggleMute"/>
  </div>

  <div
    class="flex items-center ml-2 w-[150px] relative mt-2 mb-[23px]"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <input 
      v-model="vol"
      ref="volume"
      type="range"
      class="mt-[24px] absolute rounded-full my-2 w-full h-0 z-40 appearance-none bg-opacity-100 focus:outline-none accent-white"
      :class="{'rangeDotHidden': !isHover}"
    >
    <div 
      class="pointer-events-none mt-[6px] absolute h-[4px] z-10 inset-y-0 left-0 w-0" 
      :style="`width: ${vol}%;`"
      :class="isHover ? 'bg-[#DB7093]' : 'bg-[#DB7093]'"
    ></div>
    <div class="absolute h-[4px] z-[-0] mt-[6px] inset-y-0 left-0 w-full bg-gray-50 rounded-full"></div>
  </div>
</template>

<style>
.rangeDotHidden[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 0;
  height: 0;
}
</style>
