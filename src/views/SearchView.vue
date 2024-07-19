<script setup>
import CategorySelect from "../components/CategorySelect.vue";
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

    <div
      class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6"
    >
      <CategorySelect
        category="Новинки"
        image="https://picsum.photos/id/306/300/300"
      />
      <CategorySelect
        category="Аудиокниги"
        image="https://picsum.photos/id/309/300/300"
      />
      <CategorySelect
        category="Подкасты"
        image="https://picsum.photos/id/311/300/300"
      />
      <CategorySelect
        category="Популярно на радио"
        image="https://picsum.photos/id/312/300/300"
      />
      <CategorySelect
        category="Для новых свершений"
        image="https://picsum.photos/id/317/300/300"
      />
      <CategorySelect
        category="Популярно в Tiktok"
        image="https://picsum.photos/id/319/300/300"
      />
      <CategorySelect
        category="Специально для Тебя"
        image="https://picsum.photos/id/320/300/300"
      />
      <CategorySelect
        category="Инструментальная музыка"
        image="https://picsum.photos/id/323/300/300"
      />
      <CategorySelect
        category="Новая волна"
        image="https://picsum.photos/id/324/300/300"
      />
      <CategorySelect
        category="Праздничный плейлист"
        image="https://picsum.photos/id/326/300/300"
      />
    </div>
  </div>
</template>
