<script setup>
import {toRefs} from 'vue'
import {RouterLink} from 'vue-router';

const props = defineProps({
    image: String,
    title: String,
    subTitle: String
})

const {image, title, subTitle} = toRefs(props)
</script>

<template>
    <RouterLink to="library">
        <div class="bg-teal-50 p-4 rounded-md m-2 hover:bg-teal-200 cursor-pointer">
            <img class="rounded-md" :src="image">
            <div class="text-teal-500 pt-4 font-semibold text-[17px]">{{ title }}</div>
            <div class="text-teal-400 pt-1 pb-3 text-[14px]">{{ subTitle }}</div>
        </div>
    </RouterLink>
</template>