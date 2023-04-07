<script setup lang="ts"></script>

<template>
  <div class="tw-min-h-screen tw-h-full tw-w-full tw-flex">
    Sidebar

    <div class="tw-h-full tw-flex tw-flex-col tw-flex-grow">
      Navbar

      <div class="tw-flex-grow tw-max-w-screen">
        <div fluid class="tw-p-3 md:tw-p-5">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped></style>
