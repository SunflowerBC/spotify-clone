<script setup>
import { ref, onMounted } from "vue";
import { RouterLink, RouterView } from "vue-router";
import MenuItem from "./components/MenuItem.vue";
import MusicPlayer from "./components/MusicPlayer.vue";

import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
import ChevronRight from "vue-material-design-icons/ChevronRight.vue";
import ChevronLeft from "vue-material-design-icons/ChevronLeft.vue";

import { useSongStore } from "./stores/song";
import { storeToRefs } from "pinia";
const useSong = useSongStore();
const { isPlaying, currentTrack } = storeToRefs(useSong);

let openMenu = ref(false);

onMounted(() => {
  isPlaying.value = false;
});
</script>

<template>
  <div
    class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-gradient-to-r from-teal-400 to-teal-50 bg-opacity-80 flex items-center justify-between"
  >
    <div class="flex items-center ml-6">
      <button
        type="button"
        class="rounded-full bg-teal-400 hover:bg-emerald-500 p-[1px] cursor-pointer"
      >
        <ChevronLeft fillColor="#FFFFFF" :size="30" />
      </button>
      <button
        type="button"
        class="rounded-full bg-teal-400 hover:bg-emerald-500 p-[1px] ml-4 cursor-pointer"
      >
        <ChevronRight fillColor="#FFFFFF" :size="30" />
      </button>
    </div>
    <button
      @click="openMenu = !openMenu"
      :class="openMenu ? 'bg-emerald-500' : 'bg-emerald-700'"
      class="bg-[#31d1dc69] hover:bg-emerald-500 rounded-full p-0.5 mr-8 mt-0.5 cursor-pointer"
    >
      <div class="flex items-center">
        <img
          class="rounded-full"
          width="27"
          src="https://yt3.ggpht.com/6sJ2bvEwsIEw2fdlYSgTswLLyma96EPW2QixvA8sGfheMzKiDCnrrg2QykOJvCtUG41CCImG=s88-c-k-c0x00ffffff-no-rj"
        />
        <div class="text-white text-[14px] ml-1.5 mr-1 font-semibold">
          Пользователь
        </div>
        <ChevronDown
          v-if="!openMenu"
          @click="openMenu = true"
          fillColor="#FFFFFF"
          :size="25"
        />
        <ChevronUp
          v-else
          @click="openMenu = false"
          fillColor="#FFFFFF"
          :size="25"
        />
      </div>
    </button>
    <span
      v-if="openMenu"
      class="fixed w-[190px] bg-emerald-500 shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer"
    >
      <ul class="text-gray-50 font-semibold text-[14px]">
        <li class="px-3 py-2.5 hover:bg-[#00000011] border-b border-b-gray-200">
          Профиль
        </li>
        <li class="px-3 py-2.5 hover:bg-[#00000011]">Выйти</li>
      </ul>
    </span>
  </div>
  <div id="SideNav" class="h-[100%] p-6 w-[240px] fixed z-50 bg-teal-400">
    <RouterLink to="/">
      <img
        class="items-center w-[200px]"
        src="/public/images/icons/mint-logo-for-music-site-with-pepper-mint-leaves-a.svg"
        alt=""
      />
    </RouterLink>
    <div class="my-8"></div>
    <ul>
      <RouterLink to="/">
        <MenuItem
          class="ml-[1px]"
          :iconSize="35"
          name="Главная страница"
          iconString="icon-home"
          pageUrl="/"
        />
      </RouterLink>
      <RouterLink to="/search">
        <MenuItem
          class="ml-[1px]"
          :iconSize="35"
          name="Поиск"
          iconString="icon-search"
          pageUrl="/search"
        />
      </RouterLink>
      <RouterLink to="/library">
        <MenuItem
          class="ml-[2px]"
          :iconSize="35"
          name="Библиотека песен"
          iconString="icon-library-like-in-spotify"
          pageUrl="/library"
        />
      </RouterLink>
      <div class="py-3.5"></div>
      <RouterLink to="/new">
        <MenuItem
        :iconSize="35"
        name="Создать плейлист"
        iconString="icon-plus"
        pageUrl="/playlist"
      />
      </RouterLink>
      
      <MenuItem
        class="ml-[1px]"
        :iconSize="35"
        name="Понравившиеся песни"
        iconString="icon-heart"
        pageUrl="/liked"
      />
    </ul>
    <div class="border-b border-b-gray-200">
      <ul>
        <li
          class="font-semibold text-[13px] mt-3 text-emerald-700 hover:text-white"
        >
          Мой плейлист #1
        </li>
        <li
          class="font-semibold text-[13px] mt-3 text-emerald-700 hover:text-white"
        >
          Мой плейлист #2
        </li>
        <li
          class="font-semibold text-[13px] mt-3 mb-2 text-emerald-700 hover:text-white"
        >
          Мой плейлист #3
        </li>
      </ul>
    </div>
  </div>
  <div
    class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-teal-50 to-white"
  >
    <div class="mt-[70px]"></div>
    <RouterView />
    <div class="mb-[100px]"></div>
  </div>

  <MusicPlayer v-if="currentTrack"/>
</template>
