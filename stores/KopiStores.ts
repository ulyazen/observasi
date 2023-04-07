import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart-store', {
  state: () => ({
    items: [] as string[],
  }),
  getters: {},
  actions: {
  },
})
