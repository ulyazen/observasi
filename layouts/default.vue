<script setup lang="ts"></script>

<template>
  <div class="min-h-screen h-full w-full flex">
    <div class="h-full flex flex-col flex-grow">
      <Navbar/>

      <div class="flex-grow max-w-screen">
        <div fluid class="p-3 md:p-5">
        <Hero/>
        <Fitur/>
          <slot />
        </div>
      </div>

      <Footer/>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
