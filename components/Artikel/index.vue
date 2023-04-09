<script lang="ts">
export default {
  data() {
    return {
      tanggal: '12/04/2023',
      judul: 'Ngopi Pagi Di Observasi',
      deskripsi:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      penerbit: 'Observasi',
    };
  }
};
</script>

<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-md w-3/4">
    <div class="md:flex justify-center">
      <div class="md:w-1/3">
        <img
          src="https://via.placeholder.com/500x350"
          alt="Gambar Artikel"
          class="w-full h-auto"
        />
      </div>
      <div class="p-6 md:w-2/3">
        <p class="text-stone-400">{{ tanggal }}</p>
        <h2 class="text-2xl font-bold mb-2">{{ judul }}</h2>
        <p class="text-gray-700 text-base mb-4 line-clamp-3">{{ deskripsi }}</p>
        <div class="flex flex-row items-center justify-between">
          <p class="text-stone-400">{{ penerbit }}</p>
          <a
            href="#"
            class="hover:text-blue-700 text-blue-300 font-bold text-right rounded"
          >
            Baca selengkapnya
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
