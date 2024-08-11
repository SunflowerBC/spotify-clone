<script setup>
import { ref } from 'vue';
import artists from '../artists.json'; // Импортируем JSON-файл

// Создаем реактивную переменную для хранения данных
const artistsAlbums = ref(artists.artistsAlbums); // Инициализируем данными из JSON

</script>

<template>
  <div class="p-8">
    <button
      type="button"
      class="text-teal-400 text-2xl font-semibold hover:underline cursor-pointer"
    >
      Библиотека песен
    </button>

    <div class="py-1.5"></div>
  <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 m-4">
<div v-for="artist in artistsAlbums" :key="artist.id" class="mb-3">
 <!-- Переход к альбому при нажатии -->
 <router-link :to="{ name: 'Album', params: { artistId: artist.id }}">
  <!-- Отображение обложки альбома -->
 <img :src="artist.albumCover" :alt="artist.albumName" style="width: 100px; height: 100px; object-fit: cover; margin-right: 10px;">
        <!-- Отображение имени исполнителя и названия альбома -->
        <div class="text-teal-500 pt-4 font-semibold text-[17px]">
          {{ artist.name }}
        </div>
        <div class="text-teal-400 pt-1 pb-3 text-[14px]">
          {{ artist.albumName }}
        </div>
      </router-link>
</div>
</div>
</div>
</template>