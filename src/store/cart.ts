import { type CartItem, type MenuItem } from '@/types';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([]);

  const totalCartItems = computed(() =>
    cartItems.value.reduce((total, item) => total + item.count, 0),
  );

  function findCartItembyId(id: string) {
    return cartItems.value.find((cartItem) => cartItem.item.id === id);
  }

  function isCartItemInCart(id: string) {
    return Boolean(findCartItembyId(id));
  }

  function incrementCartItemCount(item: CartItem) {
    item.count += 1;
  }

  function decrementCartItemCount(item: CartItem) {
    item.count -= 1;
  }

  function addCartItem(item: MenuItem) {
    const menuItem = findCartItembyId(item.id);

    if (!menuItem) {
      cartItems.value.push({
        item,
        count: 1,
      });
      return;
    }

    incrementCartItemCount(menuItem);
  }

  function removeCartItem(item: MenuItem) {
    const menuItem = findCartItembyId(item.id);

    if (menuItem) {
      decrementCartItemCount(menuItem);

      if (menuItem.count === 0) {
        cartItems.value = cartItems.value.filter((c) => c.item.id !== item.id);
      }

      return;
    }
  }

  return {
    cartItems,
    totalCartItems,
    findCartItembyId,
    isCartItemInCart,
    addCartItem,
    removeCartItem,
  };
});
