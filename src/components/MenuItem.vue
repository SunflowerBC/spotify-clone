<script setup>
import {ref, toRefs, watchEffect} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute()

const props = defineProps({
    iconString: String,
    iconSize: Number,
    pageUrl: String,
    name: String
})

const {iconString, iconSize, pageUrl, name} = toRefs(props)

let icon = ref(null)
let textIsHover = ref(false)

watchEffect(()=>{
    if(route.path == pageUrl.value) {
        icon.value = iconString.value + '-active'
        textIsHover.value = true
    } else {
        icon.value = iconString.value + '-inactive'
        textIsHover.value = false
    }
})

</script>

<template>
    <li
    class="flex items-center justify-start pb-4 cursor-pointer"
    >
        <img :width="iconSize" :src="`/public/images/icons/${icon}.svg`">
        <div
        :class="textIsHover ? 'text-white' : 'text-emerald-700'"
        class="font-semibold text-[14px] ml-4 mt-0.5"
        >
            <span :class="route.path == pageUrl ? 'text-white' : ''">
                {{ name }}
            </span>

        </div>
    </li>
</template>